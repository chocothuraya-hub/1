"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Send, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-chocolate)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            اتصل بنا
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            نحن هنا للإجابة على استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="border-[var(--color-border)]">
            <CardHeader>
              <CardTitle className="text-2xl text-[var(--color-chocolate)]">
                معلومات التواصل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-beige)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[var(--color-chocolate)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--color-chocolate)] mb-2">
                      الهاتف
                    </h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:07722784933" 
                        className="block text-[var(--color-muted-foreground)] hover:text-[var(--color-chocolate)] transition-colors direction-ltr text-right font-medium"
                      >
                        0772 278 4933
                      </a>
                      <a 
                        href="tel:07714386624" 
                        className="block text-[var(--color-muted-foreground)] hover:text-[var(--color-chocolate)] transition-colors direction-ltr text-right font-medium"
                      >
                        0771 438 6624
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--color-border)]">
                <h3 className="font-semibold text-[var(--color-chocolate)] mb-4">
                  ساعات العمل
                </h3>
                <div className="space-y-2 text-[var(--color-muted-foreground)]">
                  <div className="flex justify-between">
                    <span>السبت - الخميس</span>
                    <span>9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-[var(--color-border)]">
            <CardHeader>
              <CardTitle className="text-2xl text-[var(--color-chocolate)]">
                تابعنا على وسائل التواصل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[var(--color-muted-foreground)] mb-6">
                تواصل معنا عبر منصات التواصل الاجتماعي للحصول على آخر العروض والمنتجات
              </p>

              {/* Instagram */}
              <a
                href="https://instagram.com/choco_thuraya"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full h-16 border-2 border-pink-500 text-pink-500 hover:bg-pink-50 justify-start gap-4 text-lg"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="font-bold">Instagram</div>
                    <div className="text-sm">@choco_thuraya</div>
                  </div>
                </Button>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/thuraya_chocolate"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full h-16 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 justify-start gap-4 text-lg"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="font-bold">Telegram</div>
                    <div className="text-sm">@thuraya_chocolate</div>
                  </div>
                </Button>
              </a>

              <div className="pt-6 border-t border-[var(--color-border)]">
                <div className="bg-[var(--color-beige)] p-6 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-chocolate)] mb-2">
                    هل لديك استفسار؟
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    تواصل معنا عبر Instagram أو Telegram وسنكون سعداء بمساعدتك
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Brand Section */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <Card className="border-[var(--color-gold)] bg-gradient-to-br from-[var(--color-cream)] to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[var(--color-chocolate)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                ثريا Thuraya
              </h2>
              <p className="text-xl text-[var(--color-gold)] font-semibold">
                مذاق يلامس السماء
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
