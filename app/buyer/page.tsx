import Brand from '@/components/Brand';
import LangSwitch from '@/components/LangSwitch';
import RoleToggle from '@/components/RoleToggle';

export default function BuyerPage() {
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
        <button className="tab">💰 طلباتي</button>
        <button className="tab active">📰 مقترح لك</button>
      </div>

      <main>
        <div className="hero-card">
          <h2>ماذا تبحث عنه اليوم؟</h2>
          <p>أنشئ طلبك، ودع البائعين يتنافسون لإرضائك.</p>
          <div className="search-box">
            <input type="text" placeholder="ابحث عن منتج، سلعة، أو خدمة" aria-label="ابحث عن منتج، سلعة، أو خدمة" />
            <button className="cta">أنشئ طلبك +</button>
          </div>
        </div>

        <div className="stats">
          <div className="stat-card">
            <span className="label">بالقرب منك</span>
            <span className="value">12</span>
          </div>
          <div className="stat-card">
            <span className="label">عروض جديدة</span>
            <span className="value">7</span>
          </div>
          <div className="stat-card">
            <span className="label">طلبات نشطة</span>
            <span className="value">2</span>
          </div>
          <div className="stat-card">
            <span className="label">تخفيضات</span>
            <span className="value">9</span>
          </div>
        </div>

        <div className="store-card">
          <div className="store-info">
            <div className="title">المتجر الذكي</div>
            <div className="meta">
              <span className="live-dot" /> الجزائر · مباشر
            </div>
          </div>
          <span className="store-arrow">←</span>
        </div>
      </main>
    </div>
  );
}
