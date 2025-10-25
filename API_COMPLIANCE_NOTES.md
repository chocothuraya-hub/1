# ملاحظات الالتزام بـ API Guide

## ✅ التعديلات المطبقة

### 1. تصحيح أسماء الحقول في Order Creation API

تم تعديل أسماء الحقول لتطابق الـ API Guide الرسمي:

| الحقل القديم | الحقل الصحيح (حسب الـ Guide) |
|--------------|------------------------------|
| `customer_name` | `client_name` |
| `customer_mobile` | `client_mobile` |
| `customer_mobile2` | `client_mobile2` |
| `order_address` | `location` |
| `package_type` | `type_name` |
| `package_count` | `items_number` |
| `package_price` | `price` |
| `notes` | `merchant_notes` |
| `is_exchange` | `replacement` |

### 2. صيغة رقم الهاتف

- **المطلوب حسب الـ Guide**: `+9647000000000` (13 حرف: +964 + 10 أرقام)
- **التطبيق الحالي**: يقبل `07xxxxxxxxx` ويحولها تلقائياً إلى `+9647xxxxxxxxx`
- **الـ Validation**: يتحقق من 10 أرقام بعد 07

## ✅ النقاط الملتزم بها

### 1. Login API
- ✓ URL صحيح: `https://api.alwaseet-iq.net/v1/merchant/login`
- ✓ Method: POST
- ✓ Content-Type: multipart/form-data (URLSearchParams)
- ✓ Parameters: username, password

### 2. Cities API
- ✓ URL صحيح: `https://api.alwaseet-iq.net/v1/merchant/citys`
- ✓ Method: GET
- ✓ لا يحتاج token

### 3. Regions API
- ✓ URL صحيح: `https://api.alwaseet-iq.net/v1/merchant/regions?city_id=ID`
- ✓ Method: GET
- ✓ Parameter: city_id

### 4. Package Sizes API
- ✓ URL صحيح: `https://api.alwaseet-iq.net/v1/merchant/package-sizes`
- ✓ Method: GET

### 5. Create Order API
- ✓ URL صحيح: `https://api.alwaseet-iq.net/v1/merchant/create-order?token=loginToken`
- ✓ Method: POST
- ✓ Content-Type: multipart/form-data (FormData)
- ✓ جميع الحقول المطلوبة موجودة

## 📋 الحقول المطلوبة في Order Creation

### Required Fields:
- `client_name` (string) - اسم العميل
- `client_mobile` (string) - رقم الهاتف بصيغة +9647xxxxxxxxx
- `city_id` (int) - معرف المدينة
- `region_id` (int) - معرف المنطقة
- `location` (string) - وصف الموقع
- `type_name` (string) - نوع البضاعة
- `items_number` (int) - عدد القطع
- `price` (int) - السعر الإجمالي شامل التوصيل
- `package_size` (int) - حجم الطرد
- `replacement` (0 or 1) - هل هو طلب استبدال

### Optional Fields:
- `client_mobile2` (string) - رقم هاتف ثانوي
- `merchant_notes` (string) - ملاحظات التاجر

## 🔍 Response Handling

### Success Response:
```json
{
  "status": true,
  "errNum": "S000",
  "msg": "ok",
  "data": [...]
}
```

### Error Response:
```json
{
  "status": false,
  "errNum": "999",
  "msg": "error message"
}
```

## ⚠️ ملاحظات مهمة

1. **Token Management**: 
   - يتم الحصول على الـ token من Login API
   - يجب استخدام الـ token في جميع الطلبات التي تحتاج مصادقة
   - الـ token يتم إعادة تعيينه عند تغيير كلمة المرور

2. **Rate Limiting**:
   - الحد الأقصى: 30 طلب كل 30 ثانية لكل مستخدم
   - ينطبق على جميع الـ endpoints

3. **Phone Number Format**:
   - يجب أن يكون بصيغة: `+9647xxxxxxxxx` (10 أرقام بعد +9647)
   - التطبيق يحول تلقائياً من `07xxxxxxxxx` إلى `+9647xxxxxxxxx`

4. **Order Printing**:
   - بعد إنشاء الطلب، يتم استلام `qr_link` لطباعة الإيصال
   - يمكن استخدام `qr_id` لإنشاء تصميم إيصال مخصص

## 📝 التحديثات المستقبلية المقترحة

1. إضافة API لتعديل الطلب (Edit Order)
2. إضافة API لاسترجاع الطلبات (Retrieve Orders)
3. إضافة API لحالات الطلبات (Get Order Statuses)
4. إضافة API لإدارة الفواتير (Invoice Management)

---

**آخر تحديث**: 24 أكتوبر 2025
