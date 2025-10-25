"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { href: '/', label: 'الرئيسية', labelEn: 'Home' },
    { href: '/products', label: 'المنتجات', labelEn: 'Products' },
    { href: '/contact', label: 'اتصل بنا', labelEn: 'Contact' },
    { href: '/admin', label: '⚙️ الإدارة', labelEn: 'Admin', admin: true }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          style={{
            filter: 'blur(8px) grayscale(30%)',
            mixBlendMode: 'multiply',
            transform: 'scale(1.2)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Subtle and Integrated */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-100 transition-all duration-500 group">
            <div className="relative w-14 h-14 opacity-70 group-hover:opacity-90 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-chocolate)]/10 rounded-full blur-md group-hover:blur-lg transition-all" />
              <Image
                src="/logo.png"
                alt="شعار"
                fill
                className="object-contain relative z-10 filter brightness-110 contrast-95"
                style={{ 
                  filter: 'drop-shadow(0 2px 8px rgba(139, 69, 19, 0.15))',
                  mixBlendMode: 'multiply'
                }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  link.admin 
                    ? 'text-[var(--color-gold)] hover:text-[var(--color-chocolate)] font-bold' 
                    : 'text-[var(--color-chocolate)] hover:text-[var(--color-gold)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button
                variant="outline"
                size="icon"
                className="relative border-[var(--color-chocolate)] text-[var(--color-chocolate)] hover:bg-[var(--color-beige)]"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-[var(--color-gold)] text-white text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-[var(--color-chocolate)] text-[var(--color-chocolate)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-medium px-4 py-2 ${
                    link.admin 
                      ? 'text-[var(--color-gold)] hover:text-[var(--color-chocolate)] font-bold' 
                      : 'text-[var(--color-chocolate)] hover:text-[var(--color-gold)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}