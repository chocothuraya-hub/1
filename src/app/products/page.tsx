"use client";

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categoryNames, ProductCategory } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-chocolate)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            منتجاتنا
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            اكتشف تشكيلتنا الفاخرة من الشوكولاتة
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as ProductCategory | 'all')} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-4 bg-white border border-[var(--color-border)]">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-[var(--color-chocolate)] data-[state=active]:text-white"
              >
                الكل
              </TabsTrigger>
              <TabsTrigger 
                value="nuts"
                className="data-[state=active]:bg-[var(--color-chocolate)] data-[state=active]:text-white"
              >
                {categoryNames.nuts.ar}
              </TabsTrigger>
              <TabsTrigger 
                value="fruits"
                className="data-[state=active]:bg-[var(--color-chocolate)] data-[state=active]:text-white"
              >
                {categoryNames.fruits.ar}
              </TabsTrigger>
              <TabsTrigger 
                value="mixed"
                className="data-[state=active]:bg-[var(--color-chocolate)] data-[state=active]:text-white"
              >
                {categoryNames.mixed.ar}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-[var(--color-muted-foreground)]">
              لا توجد منتجات في هذه الفئة
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
