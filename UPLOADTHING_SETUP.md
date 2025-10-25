# 📤 إعداد رفع الصور (Uploadthing)

## لماذا Uploadthing؟
- ✅ **مجاني** - 2GB storage + 2GB bandwidth شهرياً
- ✅ **سهل جداً** - رفع مباشر من لوحة الإدارة
- ✅ **سريع** - CDN عالمي
- ✅ **آمن** - لا حاجة لـ File Manager

---

## الخطوات:

### 1. إنشاء حساب Uploadthing
1. اذهب إلى: https://uploadthing.com
2. اضغط **Sign Up** (يمكنك استخدام GitHub)
3. أنشئ حساب مجاني

### 2. إنشاء App
1. بعد تسجيل الدخول، اضغط **Create App**
2. اسم التطبيق: `Thuraya Chocolate`
3. اضغط **Create**

### 3. الحصول على Token
1. في Dashboard، اضغط **API Keys**
2. انسخ **Secret Token**
3. ضعه في `.env.local`:

```env
UPLOADTHING_TOKEN=sk_live_xxxxxxxxxxxxx
```

### 4. اختبار الرفع
1. شغّل المشروع: `npm run dev`
2. افتح: `http://localhost:3000/admin`
3. جرب رفع صورة
4. إذا نجح، ستظهر رسالة "تم إضافة المنتج بنجاح!"

---

## 🎉 انتهى!

الآن يمكنك:
- ✅ رفع الصور مباشرة من لوحة الإدارة
- ✅ لا حاجة لـ Hostinger File Manager
- ✅ الصور تُخزن على CDN سريع
- ✅ روابط دائمة للصور

---

## 📝 ملاحظات

### للنشر على Netlify:
أضف `UPLOADTHING_TOKEN` في Environment Variables:
1. Netlify Dashboard → Site settings
2. Environment variables → Add variable
3. Key: `UPLOADTHING_TOKEN`
4. Value: (الـ token من Uploadthing)

### الحد المجاني:
- 2GB storage
- 2GB bandwidth/شهر
- إذا احتجت أكثر، يمكنك الترقية لاحقاً

### بدائل مجانية أخرى:
- **Cloudinary** - 25GB storage
- **ImageKit** - 20GB bandwidth
- **Supabase Storage** - 1GB storage
