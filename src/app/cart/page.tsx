"use client";

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, Truck } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-IQ', {
      style: 'decimal',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="pt-12 pb-8 space-y-6">
              <div className="w-24 h-24 bg-[var(--color-beige)] rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="h-12 w-12 text-[var(--color-chocolate)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-chocolate)] mb-2">
                  السلة فارغة
                </h2>
                <p className="text-[var(--color-muted-foreground)]">
                  لم تقم بإضافة أي منتجات بعد
                </p>
              </div>
              <Link href="/products">
                <Button className="bg-[var(--color-chocolate)] hover:bg-[var(--color-chocolate-dark)] text-white">
                  تصفح المنتجات
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[var(--color-chocolate)] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
          سلة التسوق
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.product.id}-${item.weight}`}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-[var(--color-beige)] flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.nameAr}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--color-chocolate)]">
                          {item.product.nameAr}
                        </h3>
                        <p className="text-sm text-[var(--color-muted-foreground)]">
                          {item.product.nameEn}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[var(--color-muted-foreground)]">
                          الوزن:
                        </span>
                        <span className="font-semibold text-[var(--color-chocolate)]">
                          {item.weight}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.product.id, item.weight, item.quantity - 1)}
                            className="h-8 w-8 border-[var(--color-chocolate)]"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.product.id, item.weight, item.quantity + 1)}
                            className="h-8 w-8 border-[var(--color-chocolate)]"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Price and Delete */}
                        <div className="flex items-center gap-4">
                          <div className="text-left">
                            <div className="text-xl font-bold text-[var(--color-chocolate)]">
                              {formatPrice(item.price * item.quantity)}
                            </div>
                            <div className="text-xs text-[var(--color-muted-foreground)]">
                              دينار عراقي
                            </div>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeFromCart(item.product.id, item.weight)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="outline"
              onClick={clearCart}
              className="w-full border-red-500 text-red-500 hover:bg-red-50"
            >
              <Trash2 className="ml-2 h-4 w-4" />
              إفراغ السلة
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl text-[var(--color-chocolate)]">
                  ملخص الطلب
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-muted-foreground)]">
                      عدد المنتجات
                    </span>
                    <span className="font-semibold">
                      {totalItems}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-[var(--color-chocolate)]">
                      المجموع الكلي
                    </span>
                    <div className="text-left">
                      <div className="text-[var(--color-chocolate)]">
                        {formatPrice(totalPrice)}
                      </div>
                      <div className="text-sm text-[var(--color-muted-foreground)] font-normal">
                        دينار عراقي
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Link href="/delivery-order" className="w-full">
                  <Button 
                    className="w-full bg-[var(--color-chocolate)] hover:bg-[var(--color-chocolate-dark)] text-white text-lg py-6"
                  >
                    <Truck className="ml-2 h-5 w-5" />
                    طلب توصيل
                  </Button>
                </Link>
                <Link href="/products" className="w-full">
                  <Button variant="outline" className="w-full border-[var(--color-chocolate)] text-[var(--color-chocolate)]">
                    متابعة التسوق
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}