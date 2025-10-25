# دليل رفع المشروع على Hostinger

## 📋 المتطلبات الأساسية

1. حساب Hostinger مع دعم Node.js
2. الوصول إلى File Manager أو FTP
3. المشروع مبني بنجاح (npm run build)

---

## 🚀 طريقة الرفع

### الخيار 1: رفع المشروع الكامل (الطريقة الموصى بها)

#### الخطوة 1: ضغط المشروع
قم بضغط المجلدات والملفات التالية في ملف ZIP:

**الملفات والمجلدات المطلوبة:**
```
✅ .next/              (مجلد البناء)
✅ public/             (الصور والملفات الثابتة)
✅ node_modules/       (المكتبات - اختياري، يمكن تثبيتها على السيرفر)
✅ package.json
✅ package-lock.json
✅ next.config.ts
✅ tsconfig.json
✅ tailwind.config.ts
✅ postcss.config.mjs
```

**الملفات غير المطلوبة (لا ترفعها):**
```
❌ src/                (الكود المصدري - غير مطلوب بعد البناء)
❌ .git/
❌ .next/cache/
❌ node_modules/       (إذا كنت ستثبتها على السيرفر)
```

#### الخطوة 2: رفع الملفات
1. اذهب إلى Hostinger Control Panel
2. افتح File Manager
3. اذهب إلى المجلد: `public_html` أو المجلد المخصص لموقعك
4. ارفع ملف ZIP
5. فك الضغط

#### الخطوة 3: تثبيت المكتبات (إذا لم ترفع node_modules)
عبر SSH أو Terminal في Hostinger:
```bash
cd public_html
npm install --production
```

#### الخطوة 4: تشغيل المشروع
```bash
npm start
```

أو إذا كنت تستخدم PM2:
```bash
pm2 start npm --name "thuraya-chocolate" -- start
pm2 save
pm2 startup
```

---

### الخيار 2: رفع عبر Git (الأفضل للتحديثات المستقبلية)

#### 1. إنشاء Git Repository
```bash
cd thuraya-chocolate-e-commerce
git init
git add .
git commit -m "Initial commit"
```

#### 2. رفع على GitHub/GitLab
```bash
git remote add origin YOUR_REPO_URL
git push -u origin main
```

#### 3. استنساخ على Hostinger
عبر SSH:
```bash
cd public_html
git clone YOUR_REPO_URL .
npm install
npm run build
npm start
```

---

## ⚙️ إعدادات Hostinger المطلوبة

### 1. إعداد Node.js Application

في Hostinger Control Panel:
1. اذهب إلى **Advanced** → **Node.js**
2. اضغط **Create Application**
3. املأ البيانات:
   - **Application root**: `public_html` (أو مسار مشروعك)
   - **Application URL**: نطاقك
   - **Application startup file**: `node_modules/next/dist/bin/next`
   - **Node.js version**: 18.x أو أحدث

### 2. متغيرات البيئة (Environment Variables)

أضف المتغيرات التالية في إعدادات Node.js:
```
NODE_ENV=production
PORT=3000
```

### 3. إعداد .htaccess (إذا لزم الأمر)

أنشئ ملف `.htaccess` في `public_html`:
```apache
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
```

---

## 🔧 إعدادات إضافية

### تحسين الأداء

#### 1. تفعيل Compression
في `next.config.ts`:
```typescript
const nextConfig = {
  compress: true,
  // ... باقي الإعدادات
}
```

#### 2. تحسين الصور
تأكد من أن الصور في مجلد `public/` محسّنة

---

## 📦 ملفات التكوين المهمة

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // مهم للاستضافة
  compress: true,
  images: {
    unoptimized: false,
    domains: ['srv2058-files.hstgr.io'],
  },
};

export default nextConfig;
```

---

## 🐛 حل المشاكل الشائعة

### المشكلة 1: الموقع لا يعمل بعد الرفع
**الحل:**
```bash
# تحقق من السجلات
pm2 logs

# أعد تشغيل التطبيق
pm2 restart thuraya-chocolate
```

### المشكلة 2: الصور لا تظهر
**الحل:**
- تأكد من رفع مجلد `public/`
- تحقق من مسارات الصور في الكود

### المشكلة 3: API لا يعمل
**الحل:**
- تأكد من أن مجلد `.next/` مرفوع بالكامل
- تحقق من أن المنفذ (Port) صحيح

### المشكلة 4: خطأ في المكتبات
**الحل:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📊 مراقبة الأداء

### استخدام PM2 للمراقبة
```bash
# عرض حالة التطبيق
pm2 status

# عرض السجلات
pm2 logs thuraya-chocolate

# عرض استهلاك الموارد
pm2 monit
```

---

## 🔄 التحديثات المستقبلية

### عبر Git:
```bash
cd public_html
git pull
npm install
npm run build
pm2 restart thuraya-chocolate
```

### عبر FTP:
1. بناء المشروع محلياً: `npm run build`
2. رفع مجلد `.next/` الجديد
3. إعادة تشغيل التطبيق

---

## 📞 معلومات الاتصال بالسيرفر

**رابط File Manager:**
https://srv2058-files.hstgr.io/2e752a10b58bb2c5/files/

**معلومات SSH:** (احصل عليها من Hostinger Control Panel)
- Host: srv2058.hstgr.io
- Port: 22
- Username: [من لوحة التحكم]
- Password: [من لوحة التحكم]

---

## ✅ قائمة التحقق النهائية

قبل الرفع، تأكد من:
- [ ] تم بناء المشروع بنجاح (`npm run build`)
- [ ] جميع الصور موجودة في `public/`
- [ ] ملف `package.json` يحتوي على script `start`
- [ ] لا توجد أخطاء في Console
- [ ] تم اختبار المشروع محلياً
- [ ] تم إعداد متغيرات البيئة

---

## 🎯 الخطوات السريعة (TL;DR)

```bash
# 1. بناء المشروع
npm run build

# 2. ضغط الملفات المطلوبة
# (.next, public, package.json, next.config.ts)

# 3. رفع على Hostinger عبر File Manager

# 4. عبر SSH على Hostinger:
cd public_html
npm install --production
npm start

# أو باستخدام PM2:
pm2 start npm --name "thuraya-chocolate" -- start
pm2 save
```

---

**ملاحظة مهمة:** 
تأكد من أن Hostinger يدعم Node.js 18 أو أحدث، وأن لديك صلاحيات SSH للوصول إلى السيرفر.

**آخر تحديث:** 25 أكتوبر 2025
