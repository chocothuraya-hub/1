"use client";

import Image from 'next/image';
import { Product, WeightOption, weightOptions } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>('250g');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedWeight);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-IQ', {
      style: 'decimal',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-[var(--color-border)] bg-white">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden bg-[var(--color-beige)]">
          <Image
            src={product.image}
            alt={product.nameAr}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge className="bg-red-500 text-white">
                غير متوفر
              </Badge>
            </div>
          )}
          {product.featured && product.inStock && (
            <Badge className="absolute top-4 right-4 bg-[var(--color-gold)] text-white">
              مميز
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-[var(--color-chocolate)]" style={{ fontFamily: 'var(--font-display)' }}>
            {product.nameAr}
          </h3>
          <p className="text-sm text-[var(--color-muted-foreground)]">
            {product.nameEn}
          </p>
        </div>
        
        <p className="text-sm text-[var(--color-foreground)] leading-relaxed">
          {product.descriptionAr}
        </p>

        <div className="flex items-center gap-2">
          <Select value={selectedWeight} onValueChange={(value) => setSelectedWeight(value as WeightOption)}>
            <SelectTrigger className="w-full border-[var(--color-chocolate)]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {weightOptions.map(weight => (
                <SelectItem key={weight} value={weight}>
                  {weight}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[var(--color-chocolate)]">
            {formatPrice(product.prices[selectedWeight])}
          </span>
          <span className="text-sm text-[var(--color-muted-foreground)]">
            دينار عراقي
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-[var(--color-chocolate)] hover:bg-[var(--color-chocolate-dark)] text-white"
        >
          <ShoppingCart className="ml-2 h-4 w-4" />
          أضف إلى السلة
        </Button>
      </CardFooter>
    </Card>
  );
}
