# 🔐 إعداد Environment Variables في Netlify

## الخطوات:

### 1. اذهب إلى Netlify Dashboard
- افتح موقعك في Netlify
- اضغط **Site settings**

### 2. أضف Environment Variables
- اذهب إلى **Environment variables**
- اضغط **Add a variable**

### 3. أضف المتغيرات التالية:

#### قاعدة البيانات:
```
Key: DB_HOST
Value: srv2058.hstgr.io

Key: DB_PORT
Value: 3306

Key: DB_USER
Value: u899560029_admin

Key: DB_PASSWORD
Value: كلمة_السر_من_Hostinger

Key: DB_NAME
Value: u899560029_thuraya
```

#### رابط الصور:
```
Key: NEXT_PUBLIC_IMAGES_URL
Value: https://thurayachoco.io/images/products
```

#### (اختياري) حماية لوحة الإدارة:
```
Key: ADMIN_USERNAME
Value: admin

Key: ADMIN_PASSWORD
Value: كلمة_سر_قوية
```

### 4. احفظ التغييرات
- اضغط **Save**
- Netlify سيعيد بناء الموقع تلقائياً

---

## ✅ تأكد من النجاح

بعد انتهاء البناء:
1. افتح: `https://your-site.netlify.app/admin`
2. جرب إضافة منتج
3. إذا نجح، كل شيء يعمل! 🎉

---

## 🔒 ملاحظة أمان

**مهم جداً:**
- لا ترفع ملف `.env.local` على GitHub
- الملف موجود في `.gitignore` تلقائياً
- استخدم فقط Netlify Environment Variables للإنتاج
