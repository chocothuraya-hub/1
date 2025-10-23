"use client";

import Link from 'next/link';
import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-chocolate)] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              ثريا
            </h3>
            <p className="text-[var(--color-beige)] leading-relaxed">
              ذاق بلمس السحر في كل قضمة
            </p>
            <p className="text-sm text-[var(--color-beige)] mt-2">
              Choco Magic in Every Bite
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
