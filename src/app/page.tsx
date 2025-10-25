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
        {/* Background Image - Elegantly Blended */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/hero-bg.png"
            alt="خلفية"
            fill
            className="object-cover"
            style={{
              filter: 'blur(3px) brightness(1.1) contrast(0.9)',
              mixBlendMode: 'multiply',
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
            }}
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-chocolate)]/15 via-transparent to-[var(--color-beige)]/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-12 max-w-4xl mx-auto">
            {/* SVG Logo */}
            <div 
              className="relative w-full h-64 md:h-80 mx-auto animate-fade-in-up flex items-center justify-center"
              style={{
                animationDelay: '0.8s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <Image
                src="/thuraya-logo.svg"
                alt="ثُريا"
                width={800}
                height={320}
                className="w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(93, 58, 26, 0.4)) drop-shadow(0 4px 12px rgba(139, 69, 19, 0.3))',
                  maxWidth: '800px'
                }}
                priority
              />
            </div>

            <div className="flex gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-[#5D3A1A] hover:bg-[#3D2612] text-white text-lg px-8 py-6 flex items-center gap-2 shadow-xl border-2 border-[#8B4513] transition-all duration-300 hover:scale-105"
                  style={{ fontWeight: 600 }}
                >
                  <span>تصفح المنتجات</span>
                  <Sparkles className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white hover:bg-[#F5F5DC] text-[#5D3A1A] text-lg px-8 py-6 border-3 border-[#5D3A1A] shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ fontWeight: 600, borderWidth: '3px' }}
                >
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