# Hayasell — Web (Frontend)

الواجهة الأمامية لمنصة **Hayasell** — سوق طلب مباشر يربط المشترين بالبائعين، مبنية بـ Next.js 14 (App Router).

مرتبطة بالخادم الخلفي: [`hayasell-api`](https://hayasell-api.onrender.com) (مستودع منفصل).

## البنية

```
app/
  page.tsx          → الصفحة الرئيسية (شريط "أرسل طلبك")
  seller/page.tsx    → لوحة البائع
  buyer/page.tsx     → لوحة المشتري
  layout.tsx         → التخطيط العام + الخطوط (Cairo / Space Grotesk)
  globals.css        → نظام التصميم (الألوان، البطاقات، الأزرار)
components/
  Brand.tsx          → شعار Hayasell
  LangSwitch.tsx      → تبديل اللغة
  RoleToggle.tsx      → التبديل بين بائع/مشتري
lib/
  api.ts             → نقطة الاتصال بالخادم الخلفي
```

## التشغيل المحلي

```bash
npm install
cp .env.example .env.local
npm run dev
```

افتح `http://localhost:3000`.

## متغيرات البيئة

| المتغير | الوصف |
|---|---|
| `NEXT_PUBLIC_API_URL` | رابط الخادم الخلفي (`hayasell-api`) |

## النشر

مُعدّ للنشر المباشر على **Vercel**: اربط هذا المستودع بحساب Vercel، وأضف `NEXT_PUBLIC_API_URL` في إعدادات المشروع هناك.

## الهوية البصرية

- **الألوان:** كحلي `#16233F` + تدرج أزرق↔أخضر `#2F6BDB → #22B573`
- **الخطوط:** Cairo (نصوص عربية) + Space Grotesk (شعار HAYASELL)
