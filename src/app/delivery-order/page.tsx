"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  Phone, 
  MapPin, 
  Map, 
  Package, 
  Hash, 
  DollarSign, 
  FileText,
  Truck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Wallet,
  CreditCard,
  Banknote
} from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

interface City {
  id: string | number;
  city_name: string;
}

interface Region {
  id: string | number;
  region_name: string;
}

interface PackageSize {
  id: string | number;
  size: string;
}

export default function DeliveryOrderPage() {
  const { items, totalItems, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [packageSizes, setPackageSizes] = useState<PackageSize[]>([]);
  const [token, setToken] = useState<string>("");
  const [successData, setSuccessData] = useState<any>(null);

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_mobile: "",
    customer_mobile2: "",
    city_id: "",
    region_id: "",
    order_address: "",
    package_type: "",
    package_count: "",
    package_price: "",
    package_size: "",
    notes: "",
    is_exchange: false
  });

  // Fetch token on mount
  useEffect(() => {
    fetchToken();
    fetchCities();
    fetchPackageSizes();
  }, []);

  // Auto-fill form from cart data
  useEffect(() => {
    if (items.length > 0) {
      // Generate package type from cart items
      const packageType = items
        .map(item => `${item.product.nameAr} (${item.weight})`)
        .join(", ");
      
      // Calculate total quantity
      const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
      
      setFormData(prev => ({
        ...prev,
        package_type: packageType,
        package_count: totalQuantity.toString(),
        package_price: totalPrice.toString()
      }));
    }
  }, [items, totalPrice]);

  const fetchToken = async () => {
    try {
      const response = await fetch('/api/delivery/login', {
        method: 'POST'
      });
      const data = await response.json();
      if (data.data?.token) {
        setToken(data.data.token);
      }
    } catch (error) {
      console.error('Error fetching token:', error);
      toast.error('فشل الاتصال بالخادم');
    }
  };

  const fetchCities = async () => {
    try {
      const response = await fetch('/api/delivery/cities');
      const data = await response.json();
      if (data.data) {
        setCities(data.data);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
      toast.error('فشل جلب المدن');
    }
  };

  const fetchRegions = async (cityId: string) => {
    try {
      setRegions([]);
      setFormData(prev => ({ ...prev, region_id: "" }));
      
      const response = await fetch(`/api/delivery/regions?city_id=${cityId}`);
      const data = await response.json();
      if (data.data) {
        setRegions(data.data);
      }
    } catch (error) {
      console.error('Error fetching regions:', error);
      toast.error('فشل جلب المناطق');
    }
  };

  const fetchPackageSizes = async () => {
    try {
      const response = await fetch('/api/delivery/package-sizes');
      const data = await response.json();
      if (data.data) {
        setPackageSizes(data.data);
      }
    } catch (error) {
      console.error('Error fetching package sizes:', error);
      toast.error('فشل جلب أحجام الطرود');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === "city_id") {
      fetchRegions(value);
    }
  };

  const validateForm = () => {
    if (!formData.customer_name.trim()) {
      toast.error('الرجاء إدخال اسم العميل');
      return false;
    }
    if (!formData.customer_mobile.trim()) {
      toast.error('الرجاء إدخال رقم الهاتف');
      return false;
    }
    // Accept Iraqi phone numbers: 07xxxxxxxxxx (11 digits) or +9647xxxxxxxxxx (14 chars)
    const phoneRegex = /^(07\d{9}|\+9647\d{9})$/;
    if (!phoneRegex.test(formData.customer_mobile)) {
      toast.error('رقم الهاتف يجب أن يكون بصيغة 07xxxxxxxxx (10 أرقام بعد 07) أو +9647xxxxxxxxx');
      return false;
    }
    if (!formData.city_id) {
      toast.error('الرجاء اختيار المدينة');
      return false;
    }
    if (!formData.region_id) {
      toast.error('الرجاء اختيار المنطقة');
      return false;
    }
    if (!formData.order_address.trim()) {
      toast.error('الرجاء إدخال وصف الموقع');
      return false;
    }
    if (!formData.package_type.trim()) {
      toast.error('الرجاء إدخال نوع البضاعة');
      return false;
    }
    if (!formData.package_count || parseInt(formData.package_count) < 1) {
      toast.error('الرجاء إدخال عدد القطع');
      return false;
    }
    if (!formData.package_price || parseFloat(formData.package_price) < 0) {
      toast.error('الرجاء إدخال السعر');
      return false;
    }
    if (!formData.package_size) {
      toast.error('الرجاء اختيار حجم الطرد');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 Form submitted');
    console.log('📝 Form data:', formData);
    
    if (!validateForm()) {
      console.log('❌ Validation failed');
      return;
    }
    
    if (!token) {
      console.log('❌ No token available');
      toast.error('جاري الاتصال بالخادم...');
      return;
    }

    console.log('✅ Validation passed, token available');
    setLoading(true);

    try {
      // Convert phone numbers to +964 format if needed
      const formatPhone = (phone: string) => {
        if (!phone) return "";
        if (phone.startsWith('+964')) return phone;
        if (phone.startsWith('07')) return '+964' + phone.substring(1);
        return phone;
      };

      const orderData = {
        client_name: formData.customer_name,
        client_mobile: formatPhone(formData.customer_mobile),
        client_mobile2: formatPhone(formData.customer_mobile2),
        city_id: formData.city_id,
        region_id: formData.region_id,
        location: formData.order_address,
        type_name: formData.package_type,
        items_number: formData.package_count,
        price: formData.package_price,
        package_size: formData.package_size,
        merchant_notes: formData.notes || "",
        replacement: formData.is_exchange ? "1" : "0"
      };

      console.log('📦 Sending order data:', orderData);

      const response = await fetch('/api/delivery/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, orderData })
      });

      console.log('📥 Response status:', response.status);

      const data = await response.json();
      console.log('📥 Response data:', data);

      if (response.ok) {
        console.log('✅ Order created successfully!');
        toast.success('تم إرسال الطلب بنجاح!', {
          description: 'تم إرسال طلبك إلى نظام الوسيط'
        });
        setSuccessData(data);
        
        // Reset form
        setFormData({
          customer_name: "",
          customer_mobile: "",
          customer_mobile2: "",
          city_id: "",
          region_id: "",
          order_address: "",
          package_type: "",
          package_count: "",
          package_price: "",
          package_size: "",
          notes: "",
          is_exchange: false
        });
      } else {
        console.error('❌ Order creation failed:', data);
        toast.error(data.error || 'فشل إرسال الطلب');
      }
    } catch (error) {
      console.error('💥 Submit error:', error);
      toast.error('حدث خطأ أثناء إرسال الطلب');
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-chocolate)] mb-4">
              تم إرسال الطلب بنجاح!
            </h2>
            <p className="text-lg text-[var(--color-muted-foreground)] mb-6">
              شكراً لك! سيتم التواصل معك قريباً
            </p>
            
            {successData.order_id && (
              <div className="bg-[var(--color-beige)] p-6 rounded-xl mb-6">
                <p className="text-sm text-[var(--color-muted-foreground)] mb-2">رقم الطلب</p>
                <p className="text-2xl font-bold text-[var(--color-chocolate)]">
                  {successData.order_id}
                </p>
              </div>
            )}

            {successData.qr_code && (
              <div className="mb-6">
                <img 
                  src={successData.qr_code} 
                  alt="QR Code" 
                  className="mx-auto rounded-lg"
                />
              </div>
            )}

            <Link href="/">
              <Button
                className="bg-[var(--color-chocolate)] hover:bg-[var(--color-chocolate-dark)] text-white"
              >
                العودة للصفحة الرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-gold)]/20 rounded-full mb-4">
            <Truck className="h-8 w-8 text-[var(--color-gold)]" />
          </div>
          <h1 className="text-4xl font-bold text-[var(--color-chocolate)] mb-2">
            طلب توصيل جديد
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            املأ البيانات التالية لإرسال طلب التوصيل
          </p>
        </div>

        {/* Cart Info Alert */}
        {items.length > 0 && (
          <div className="bg-[var(--color-beige)] border-2 border-[var(--color-gold)]/30 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Package className="h-5 w-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-[var(--color-chocolate)] mb-1">
                  تم ملء البيانات من السلة تلقائياً
                </p>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  نوع البضاعة، عدد القطع، والسعر تم تعبئتها من سلة التسوق
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Customer Name */}
          <div className="space-y-2">
            <Label htmlFor="customer_name" className="flex items-center gap-2 text-[var(--color-chocolate)]">
              <User className="h-4 w-4" />
              اسم العميل <span className="text-red-500">*</span>
            </Label>
            <Input
              id="customer_name"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleInputChange}
              placeholder="أدخل اسم العميل"
              required
              className="text-lg"
            />
          </div>

          {/* Phone Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customer_mobile" className="flex items-center gap-2 text-[var(--color-chocolate)]">
                <Phone className="h-4 w-4" />
                رقم الهاتف الأساسي <span className="text-red-500">*</span>
              </Label>
              <Input
                id="customer_mobile"
                name="customer_mobile"
                type="tel"
                value={formData.customer_mobile}
                onChange={handleInputChange}
                placeholder="07xxxxxxxxx"
                required
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customer_mobile2" className="flex items-center gap-2 text-[var(--color-chocolate)]">
                <Phone className="h-4 w-4" />
                رقم الهاتف الثانوي
              </Label>
              <Input
                id="customer_mobile2"
                name="customer_mobile2"
                type="tel"
                value={formData.customer_mobile2}
                onChange={handleInputChange}
                placeholder="07xxxxxxxxx (اختياري)"
                className="text-lg"
              />
            </div>
          </div>

          {/* City and Region */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city_id" className="flex items-center gap-2 text-[var(--color-chocolate)]">
                <MapPin className="h-4 w-4" />
                المدينة <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.city_id}
                onValueChange={(value) => handleSelectChange("city_id", value)}
                required
              >
                <SelectTrigger className="text-lg">
                  <SelectValue placeholder="اختر المدينة" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.id} value={String(city.id)}>
                      {city.city_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region_id" className="flex items-center gap-2 text-[var(--color-chocolate)]">
                <Map className="h-4 w-4" />
                المنطقة <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.region_id}
                onValueChange={(value) => handleSelectChange("region_id", value)}
                disabled={!formData.city_id || regions.length === 0}
                required
              >
                <SelectTrigger className="text-lg">
                  <SelectValue placeholder="اختر المنطقة" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.id} value={String(region.id)}>
                      {region.region_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="order_address" className="flex items-center gap-2 text-[var(--color-chocolate)]">
              <Map className="h-4 w-4" />
              وصف الموقع أو أقرب نقطة دالة <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="order_address"
              name="order_address"
              value={formData.order_address}
              onChange={handleInputChange}
              placeholder="اكتب وصفاً تفصيلياً للموقع..."
              required
              rows={3}
              className="text-lg resize-none"
            />
          </div>

          {/* Package Type */}
          <div className="space-y-2">
            <Label htmlFor="package_type" className="flex items-center gap-2 text-[var(--color-chocolate)]">
              <Package className="h-4 w-4" />
              نوع البضاعة أو الطرد <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="package_type"
              name="package_type"
              value={formData.package_type}
              onChange={handleInputChange}
              placeholder="مثال: أطعمة، ملابس، إلكترونيات..."
              required
              rows={3}
              className="text-lg resize-none"
            />
            {items.length > 0 && (
              <p className="text-xs text-[var(--color-muted-foreground)]">
                ✓ تم الملء تلقائياً من السلة
              </p>
            )}
          </div>

          {/* Package Count and Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="package_count" className="flex items-center gap-2 text-[var(--color-chocolate)]">
                <Hash className="h-4 w-4" />
                عدد القطع <span className="text-red-500">*</span>
              </Label>
              <Input
                id="package_count"
                name="package_count"
                type="number"
                min="1"
                value={formData.package_count}
                onChange={handleInputChange}
                placeholder="1"
                required
                className="text-lg"
              />
              {items.length > 0 && (
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  ✓ تم الملء تلقائياً من السلة
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="package_price" className="flex items-center gap-2 text-[var(--color-chocolate)]">
                <DollarSign className="h-4 w-4" />
                السعر (دينار عراقي) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="package_price"
                name="package_price"
                type="number"
                min="0"
                step="500"
                value={formData.package_price}
                onChange={handleInputChange}
                placeholder="0"
                required
                className="text-lg"
              />
              {items.length > 0 && (
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  ✓ تم الملء تلقائياً من السلة
                </p>
              )}
            </div>
          </div>

          {/* Package Size */}
          <div className="space-y-2">
            <Label htmlFor="package_size" className="flex items-center gap-2 text-[var(--color-chocolate)]">
              <Package className="h-4 w-4" />
              حجم الطرد <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.package_size}
              onValueChange={(value) => handleSelectChange("package_size", value)}
              required
            >
              <SelectTrigger className="text-lg">
                <SelectValue placeholder="اختر حجم الطرد" />
              </SelectTrigger>
              <SelectContent>
                {packageSizes.map((size) => (
                  <SelectItem key={size.id} value={String(size.id)}>
                    {size.size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="flex items-center gap-2 text-[var(--color-chocolate)]">
              <FileText className="h-4 w-4" />
              ملاحظات اختيارية
            </Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="أي ملاحظات خاصة بالطلب..."
              rows={3}
              className="text-lg resize-none"
            />
          </div>

          {/* Exchange Checkbox */}
          <div className="flex items-center gap-3 p-4 bg-[var(--color-beige)] rounded-xl">
            <Checkbox
              id="is_exchange"
              checked={formData.is_exchange}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, is_exchange: checked as boolean }))
              }
            />
            <Label 
              htmlFor="is_exchange" 
              className="text-base font-medium text-[var(--color-chocolate)] cursor-pointer"
            >
              طلب استبدال (exchange)
            </Label>
          </div>

          {/* Payment Methods */}
          <div className="bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-cream)] rounded-xl p-6 border-2 border-[var(--color-gold)]/30">
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="h-5 w-5 text-[var(--color-gold)]" />
              <h3 className="text-xl font-bold text-[var(--color-chocolate)]">
                طرق الدفع المتاحة
              </h3>
            </div>
            
            <div className="space-y-3">
              {/* ZainCash */}
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[var(--color-chocolate)]">زين كاش</p>
                  <p className="text-sm text-[var(--color-muted-foreground)] font-mono">07714386624</p>
                </div>
              </div>

              {/* Super Key */}
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[var(--color-chocolate)]">سوبر كي</p>
                  <p className="text-sm text-[var(--color-muted-foreground)] font-mono">71119382302</p>
                </div>
              </div>

              {/* Cash on Delivery */}
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Banknote className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[var(--color-chocolate)]">تسليم كاش عند الاستلام</p>
                  <p className="text-sm text-[var(--color-muted-foreground)]">الدفع نقداً عند استلام الطلب</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-chocolate)] hover:bg-[var(--color-chocolate-dark)] text-white text-lg py-6"
          >
            {loading ? (
              <>
                <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                جاري إرسال الطلب...
              </>
            ) : (
              <>
                <Truck className="ml-2 h-5 w-5" />
                إرسال طلب التوصيل
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}