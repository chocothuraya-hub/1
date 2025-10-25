# 🔐 إضافة Environment Variables في Netlify

## ⚠️ مهم جداً!
لا يمكن وضع الـ secrets في netlify.toml (GitHub يمنعها)
يجب إضافتها يدوياً في Netlify Dashboard

---

## 📍 الخطوات بالتفصيل:

### 1. افتح موقعك في Netlify
- اذهب إلى: https://app.netlify.com
- اضغط على اسم الموقع من القائمة اليسرى (Sites)

### 2. اذهب إلى Site Configuration
- اضغط **Site configuration** من القائمة العلوية
- أو من القائمة الجانبية

### 3. ابحث عن Environment Variables
- في الصفحة، ابحث عن قسم **Environment variables**
- (ليس Team Settings - بل Site Settings)

### 4. أضف المتغيرات واحداً تلو الآخر

اضغط **Add a variable** لكل متغير:

#### المتغير 1:
```
Key: DB_HOST
Value: srv2058.hstgr.io
Scopes: ✓ All (Production, Deploy Previews, Branch deploys)
```

#### المتغير 2:
```
Key: DB_PORT
Value: 3306
Scopes: ✓ All
```

#### المتغير 3:
```
Key: DB_USER
Value: u899560029_adm
Scopes: ✓ All
```

#### المتغير 4:
```
Key: DB_PASSWORD
Value: Qwertyui432@
Scopes: ✓ All
```

#### المتغير 5:
```
Key: DB_NAME
Value: u899550729_u8995600
Scopes: ✓ All
```

#### المتغير 6:
```
Key: UPLOADTHING_TOKEN
Value: (الـ token من Uploadthing Dashboard)
Scopes: ✓ All
```

### 5. احفظ
- بعد إضافة كل المتغيرات، اضغط **Save**
- Netlify سيعيد بناء الموقع تلقائياً

---

## ✅ التحقق من النجاح

بعد انتهاء البناء (2-3 دقائق):

1. افتح موقعك: `https://your-site.netlify.app`
2. اذهب إلى: `https://your-site.netlify.app/admin`
3. جرب إضافة منتج جديد
4. إذا نجح، كل شيء يعمل! 🎉

---

## 🔗 ربط الدومين (thurayachoco.io)

بعد نجاح البناء:

### في Netlify:
1. Site configuration → **Domain management**
2. اضغط **Add a domain**
3. أدخل: `thurayachoco.io`
4. اضغط **Verify**

### في Hostinger:
1. اذهب إلى **Domains** → **DNS / Name Servers**
2. أضف/عدّل السجلات التالية:

```
Type: A
Name: @
Value: (IP من Netlify)

Type: CNAME
Name: www
Value: your-site.netlify.app
```

أو استخدم Netlify DNS (أسهل):
- في Netlify، اضغط **Set up Netlify DNS**
- انسخ الـ Name Servers
- ضعها في Hostinger → Domains → Name Servers

---

## 📝 ملاحظات مهمة

1. **Environment Variables مجانية** على مستوى الموقع (Site-level)
2. **Team-level** فقط هي المدفوعة
3. تأكد من إضافتها في **Site configuration** وليس Team settings
4. بعد الإضافة، انتظر إعادة البناء (2-3 دقائق)

---

## 🆘 إذا لم تجد Environment Variables

جرب هذه الطرق:

### الطريقة 1:
```
Site configuration → Environment → Environment variables
```

### الطريقة 2:
```
Settings → Build & deploy → Environment → Environment variables
```

### الطريقة 3:
- اضغط على اسم الموقع في الأعلى
- ثم **Site settings**
- ابحث عن **Environment**

---

## 🎯 الخلاصة

1. ✅ افتح موقعك في Netlify (ليس Team)
2. ✅ اذهب إلى Site configuration
3. ✅ أضف Environment Variables (6 متغيرات)
4. ✅ احفظ وانتظر إعادة البناء
5. ✅ اختبر لوحة الإدارة
6. ✅ اربط الدومين thurayachoco.io

**بعدها كل شيء سيعمل! 🚀**
