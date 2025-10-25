# 🎯 دليل إعداد لوحة الإدارة

## الخطوة 1: إعداد قاعدة البيانات

### 1.1 إنشاء ملف `.env.local`
انسخ `.env.local.example` وأعد تسميته إلى `.env.local` ثم ضع معلومات Hostinger:

```env
DB_HOST=srv2058.hstgr.io
DB_PORT=3306
DB_USER=u899560029_admin
DB_PASSWORD=كلمة_السر_من_Hostinger
DB_NAME=u899560029_thuraya

ADMIN_USERNAME=admin
ADMIN_PASSWORD=كلمة_سر_قوية

NEXT_PUBLIC_IMAGES_URL=https://thurayachoco.io/images/products
```

### 1.2 إنشاء الجداول في قاعدة البيانات
```bash
npm run db:push
```

هذا الأمر سينشئ جدولين:
- `categories` - الفئات (شوكولاتة، هدايا، إلخ)
- `products` - المنتجات

---

## الخطوة 2: رفع الصور على Hostinger

### 2.1 إنشاء مجلد للصور
1. افتح **File Manager** في Hostinger
2. اذهب إلى `public_html`
3. أنشئ مجلد جديد: `images`
4. داخله أنشئ مجلد: `products`

المسار النهائي: `public_html/images/products/`

### 2.2 رفع الصور
1. ارفع صور المنتجات في مجلد `products`
2. الرابط سيكون: `https://thurayachoco.io/images/products/اسم_الصورة.jpg`

---

## الخطوة 3: استخدام لوحة الإدارة

### 3.1 الوصول للوحة
افتح: `http://localhost:3000/admin` (محلياً)
أو: `https://your-netlify-site.netlify.app/admin` (بعد النشر)

### 3.2 إضافة منتج جديد
1. املأ النموذج:
   - **اسم المنتج**: مثلاً "علبة شوكولاتة فاخرة"
   - **Slug**: `chocolate-box-luxury` (للرابط)
   - **الوصف**: وصف المنتج
   - **السعر**: 150.00
   - **رابط الصورة**: `https://thurayachoco.io/images/products/box1.jpg`
   - **متوفر**: ✓ (إذا كان متوفراً)
   - **مميز**: ✓ (إذا تريد عرضه في الصفحة الرئيسية)

2. اضغط "إضافة المنتج"

### 3.3 إدارة المنتجات
- **إخفاء/إظهار**: لتغيير حالة التوفر
- **حذف**: لحذف المنتج نهائياً

---

## الخطوة 4: النشر على Netlify

### 4.1 إضافة Environment Variables في Netlify
1. اذهب إلى **Site settings** → **Environment variables**
2. أضف المتغيرات من `.env.local`:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `NEXT_PUBLIC_IMAGES_URL`

### 4.2 رفع التحديثات
```bash
git add .
git commit -m "Add admin dashboard"
git push
```

Netlify سيبني الموقع تلقائياً!

---

## 🎉 انتهى!

الآن عندك:
- ✅ لوحة إدارة كاملة
- ✅ إضافة/تعديل/حذف منتجات
- ✅ تغيير حالة التوفر
- ✅ رفع صور على Hostinger
- ✅ قاعدة بيانات MySQL على Hostinger

---

## 📝 ملاحظات مهمة

1. **الأمان**: لوحة الإدارة حالياً بدون حماية. سنضيف authentication لاحقاً
2. **الصور**: ارفع الصور يدوياً على Hostinger File Manager
3. **النسخ الاحتياطي**: Hostinger يعمل backup أسبوعي تلقائياً

---

## 🆘 مشاكل شائعة

### خطأ في الاتصال بقاعدة البيانات
- تأكد من معلومات `.env.local` صحيحة
- تأكد من تفعيل Remote MySQL في Hostinger

### الصور لا تظهر
- تأكد من رفع الصور في المسار الصحيح
- تأكد من الرابط صحيح: `https://thurayachoco.io/images/products/...`

### لا تظهر المنتجات
- تأكد من تشغيل `npm run db:push` لإنشاء الجداول
