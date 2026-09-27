import Brand from '@/components/Brand';
import LangSwitch from '@/components/LangSwitch';
import RoleToggle from '@/components/RoleToggle';

export default function SellerPage() {
  return (
    <div className="wrap">
      <div className="topbar">
        <Brand />
        <LangSwitch />
      </div>

      <div className="topbar" style={{ paddingTop: 0 }}>
        <RoleToggle />
      </div>

      <div className="tabs">
        <button className="tab">📧 عروضي</button>
        <button className="tab active">🎯 طلبات لك</button>
      </div>

      <main>
        <div className="hero-card">
          <h2>لديك فرص بيع جديدة 🎯</h2>
          <p>منصة Hayasell تجلب لك الطلبات المناسبة مباشرة، بدل انتظار الزبون.</p>
        </div>

        <div className="stats">
          <div className="stat-card">
            <span className="label">بالقرب منك</span>
            <span className="value">9</span>
          </div>
          <div className="stat-card">
            <span className="label">طلبات مناسبة</span>
            <span className="value">14</span>
          </div>
          <div className="stat-card span2">
            <span className="label">فرص اليوم</span>
            <span className="value">6</span>
          </div>
        </div>

        <div className="demand-card">
          <div className="demand-top">
            <div>
              <div className="demand-budget">الميزانية حتى 125,000 دج</div>
              <div className="demand-loc">📍 على بعد 3.2 كم</div>
            </div>
            <span className="badge-important">مهم</span>
          </div>
          <div className="demand-product">📱 iPhone 15 — 128GB</div>
          <div className="demand-meta">الكمية: 1 · الجزائر · منذ 6 دقائق</div>
          <div className="demand-actions">
            <button className="btn-outline">التفاصيل</button>
            <button className="btn-primary">أرسل عرضك 💰</button>
          </div>
        </div>
      </main>
    </div>
  );
}
