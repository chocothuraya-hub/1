# 🚀 رفع المشروع على Vercel (مجاني)

## لماذا Vercel؟
- ✅ مجاني 100%
- ✅ مصمم خصيصاً لـ Next.js
- ✅ رفع تلقائي من GitHub
- ✅ SSL مجاني
- ✅ سرعة عالية جداً

---

## 📋 الخطوات:

### 1️⃣ إنشاء حساب GitHub (إذا لم يكن لديك)

1. اذهب إلى: https://github.com
2. اضغط "Sign up"
3. أكمل التسجيل

---

### 2️⃣ رفع المشروع على GitHub

في Command Prompt في مجلد المشروع:

```bash
cd thuraya-chocolate-e-commerce

# تهيئة Git
git init
git add .
git commit -m "Initial commit"

# إنشاء repository على GitHub
# اذهب إلى: https://github.com/new
# سمّه: thuraya-chocolate
# ثم ارجع وشغّل:

git remote add origin https://github.com/YOUR_USERNAME/thuraya-chocolate.git
git branch -M main
git push -u origin main
```

---

### 3️⃣ رفع على Vercel

1. اذهب إلى: https://vercel.com
2. اضغط "Sign up" واختر "Continue with GitHub"
3. اضغط "Import Project"
4. اختر repository: `thuraya-chocolate`
5. اضغط "Deploy"

**🎉 خلاص! الموقع سيكون جاهز في دقيقتين**

---

### 4️⃣ الحصول على رابط الموقع

بعد الرفع، ستحصل على رابط مثل:
```
https://thuraya-chocolate.vercel.app
```

---

## 🔧 ربط نطاق خاص (اختياري)

إذا كان لديك نطاق من Hostinger:

1. في Vercel → Settings → Domains
2. أضف نطاقك: `yourdomain.com`
3. في Hostinger DNS Settings، أضف:
   - Type: `CNAME`
   - Name: `@`
   - Value: `cname.vercel-dns.com`

---

## 💡 مميزات إضافية

- **Auto Deploy**: كل تحديث على GitHub يرفع تلقائياً
- **Preview URLs**: كل branch له رابط خاص
- **Analytics**: إحصائيات مجانية
- **Edge Functions**: APIs سريعة جداً

---

## 📞 مساعدة

إذا واجهت مشاكل:
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

---

## ⚡ الخطوات السريعة (TL;DR)

```bash
# 1. رفع على GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 2. اذهب إلى vercel.com
# 3. Import من GitHub
# 4. Deploy
# 5. خلاص! ✅
```

---

**ملاحظة:** Vercel أفضل من Hostinger Shared Hosting لمشاريع Next.js!
