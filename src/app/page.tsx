"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-chocolate)]/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {/* Logo */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1761228272200.png"
                alt="ثريا Thuraya"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-chocolate)] leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              ثريا
            </h1>
            
            <p className="text-2xl md:text-3xl text-[var(--color-gold)] font-semibold">
              Thuraya
            </p>
            
            <p className="text-xl md:text-2xl text-[var(--color-chocolate)] font-medium">
              ذاق بلمس السحر في كل قضمة
            </p>
            
            <p className="text-lg text-[var(--color-muted-foreground)]">
              Choco Magic in Every Bite
            </p>

            <div className="flex gap-4 justify-center pt-6">
              <Link href="/products">
                <Button size="lg" className="bg-[var(--color-chocolate)] hover:bg-[var(--color-chocolate-dark)] text-white text-lg px-8">
                  <Sparkles className="ml-2 h-5 w-5" />
                  تصفح المنتجات
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[var(--color-chocolate)] text-[var(--color-chocolate)] hover:bg-[var(--color-beige)] text-lg px-8">
                  اتصل بنا
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[var(--color-gold)]/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--color-chocolate)]/10 rounded-full blur-2xl" />
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-chocolate)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            منتجاتنا المميزة
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            أجود أنواع المكسرات والفواكه المغطاة بالشوكولاتة الفاخرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline" className="border-[var(--color-chocolate)] text-[var(--color-chocolate)] hover:bg-[var(--color-beige)] text-lg">
              عرض جميع المنتجات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-[var(--color-gold)]/20 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-chocolate)]">
                جودة عالية
              </h3>
              <p className="text-[var(--color-muted-foreground)]">
                منتجات فاخرة من أجود أنواع المكسرات والشوكولاتة
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-[var(--color-gold)]/20 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-chocolate)]">
                طعم استثنائي
              </h3>
              <p className="text-[var(--color-muted-foreground)]">
                تجربة لذيذة لا تُنسى مع كل قضمة
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-[var(--color-gold)]/20 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-chocolate)]">
                تشكيلة متنوعة
              </h3>
              <p className="text-[var(--color-muted-foreground)]">
                خيارات متعددة من المكسرات والفواكه والأوزان
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}