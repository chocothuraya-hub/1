'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useUploadThing } from '@/lib/uploadthing';
import { Upload } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  price: string;
  image: string | null;
  categoryId: number | null;
  inStock: boolean;
  featured: boolean;
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    image: '',
    categoryId: '',
    inStock: true,
    featured: false,
  });

  const { startUpload } = useUploadThing("productImage");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      
      // Check if data is an array
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('Invalid data format:', data);
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = formData.image;

      // Upload image if selected
      if (selectedFile) {
        const uploadResult = await startUpload([selectedFile]);
        if (uploadResult && uploadResult[0]) {
          imageUrl = uploadResult[0].url;
        }
      }

      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          image: imageUrl,
          categoryId: formData.categoryId ? parseInt(formData.categoryId) : null,
        }),
      });

      if (res.ok) {
        alert('تم إضافة المنتج بنجاح!');
        fetchProducts();
        setFormData({
          name: '',
          slug: '',
          description: '',
          price: '',
          image: '',
          categoryId: '',
          inStock: true,
          featured: false,
        });
        setSelectedFile(null);
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('فشل في إضافة المنتج');
    } finally {
      setUploading(false);
    }
  };

  const toggleStock = async (id: number, currentStock: boolean) => {
    try {
      await fetch(`/api/admin/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inStock: !currentStock }),
      });
      fetchProducts();
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  const deleteProduct = async (id: number) => {
    if (!confirm('هل أنت متأكد من حذف هذا المنتج؟')) return;
    
    try {
      await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mx-auto p-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-8">لوحة تحكم الإدارة</h1>

      {/* Add Product Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">إضافة منتج جديد</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>اسم المنتج</Label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label>Slug (للرابط)</Label>
            <Input
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="chocolate-box"
              required
            />
          </div>

          <div>
            <Label>الوصف</Label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div>
            <Label>السعر</Label>
            <Input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
          </div>

          <div>
            <Label>رفع صورة المنتج</Label>
            <div className="flex gap-2 items-center">
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="flex-1"
              />
              {selectedFile && (
                <span className="text-sm text-green-600">✓ {selectedFile.name}</span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              أو ضع رابط الصورة مباشرة:
            </p>
            <Input
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="mt-2"
            />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.inStock}
                onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
              />
              متوفر
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              />
              مميز
            </label>
          </div>

          <Button type="submit" disabled={uploading}>
            {uploading ? (
              <>
                <Upload className="mr-2 h-4 w-4 animate-spin" />
                جاري الرفع...
              </>
            ) : (
              'إضافة المنتج'
            )}
          </Button>
        </form>
      </div>

      {/* Products List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">المنتجات الحالية</h2>
        {loading ? (
          <p>جاري التحميل...</p>
        ) : products.length === 0 ? (
          <p>لا توجد منتجات بعد</p>
        ) : (
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.price} ريال</p>
                  <p className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'متوفر' : 'غير متوفر'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => toggleStock(product.id, product.inStock)}
                    variant="outline"
                  >
                    {product.inStock ? 'إخفاء' : 'إظهار'}
                  </Button>
                  <Button onClick={() => deleteProduct(product.id)} variant="destructive">
                    حذف
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
