# 🚀 البدء السريع

## 1️⃣ أنشئ ملف `.env.local`

```bash
cp .env.local.example .env.local
```

ثم افتح `.env.local` وضع:
- كلمة سر قاعدة البيانات من Hostinger
- كلمة سر لوحة الإدارة

## 2️⃣ أنشئ الجداول

```bash
npm run db:push
```

## 3️⃣ شغّل المشروع

```bash
npm run dev
```

## 4️⃣ افتح لوحة الإدارة

```
http://localhost:3000/admin
```

## 5️⃣ أضف منتج تجريبي

1. ارفع صورة على Hostinger File Manager في: `public_html/images/products/`
2. في لوحة الإدارة، أضف منتج جديد
3. ضع رابط الصورة: `https://thurayachoco.io/images/products/اسم_الصورة.jpg`

## ✅ انتهى!

الآن يمكنك إضافة منتجات وإدارتها بسهولة 🎉
