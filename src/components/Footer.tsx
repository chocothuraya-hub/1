"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-chocolate)] text-white mt-20 relative overflow-hidden">
      {/* Elegant Background Blend */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          style={{
            filter: 'blur(5px) brightness(0.8) contrast(1.1)',
            mixBlendMode: 'soft-light',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand - Elegant and Embedded */}
          <div className="flex flex-col items-start relative">
            <div className="relative w-28 h-28 mb-4 opacity-60 hover:opacity-80 transition-all duration-700">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent rounded-full blur-2xl" />
              <div className="absolute inset-0 bg-[var(--color-gold)]/5 rounded-full blur-xl" />
              
              {/* Logo with blend mode */}
              <Image
                src="/logo.png"
                alt="شعار"
                fill
                className="object-contain relative z-10"
                style={{ 
                  filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3)) brightness(1.1) contrast(0.95)',
                  mixBlendMode: 'soft-light',
                  opacity: 0.85
                }}
              />
            </div>
            <p className="text-[var(--color-beige)] leading-relaxed text-lg font-semibold opacity-90">
              مذاق يلامس السماء
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-gold)]">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[var(--color-beige)] hover:text-[var(--color-gold)] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[var(--color-beige)] hover:text-[var(--color-gold)] transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--color-beige)] hover:text-[var(--color-gold)] transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-gold)]">
              تابعنا
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-gold)] transition-all"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-gold)] transition-all"
              >
                <Send className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-[var(--color-beige)] text-sm">
          <p>© 2024 ثريا Thuraya. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
