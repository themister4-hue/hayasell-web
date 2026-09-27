'use client';

import { useState } from 'react';
import Link from 'next/link';
import Brand from '@/components/Brand';
import LangSwitch from '@/components/LangSwitch';
import { createRequest } from '@/lib/api';

export default function HomePage() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setStatus('sending');
    try {
      await createRequest({ productName: value.trim() });
      setStatus('sent');
      setValue('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="wrap">
      <div className="topbar">
        <Brand />
        <LangSwitch />
      </div>

      <div className="home-hero">
        <div className="kicker">
          <span className="dot" />
          <span>سوق حيّ يعمل الآن في الجزائر والخليج</span>
        </div>

        <h1>
          بدل أن تبحث عن البائع،
          <br />
          <span className="thin">دع البائع يبحث عنك.</span>
        </h1>

        <form className="request-bar" onSubmit={handleSubmit}>
          <div className="icon" aria-hidden="true">📣</div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ماذا تحتاج اليوم؟ اكتب طلبك…"
            aria-label="اكتب ما تحتاجه"
            autoComplete="off"
          />
          <button type="submit" className="cta" disabled={status === 'sending'}>
            {status === 'sending' ? 'جارٍ الإرسال…' : 'أرسل طلبك'}
          </button>
        </form>

        {status === 'sent' && <p style={{ color: 'var(--green)', fontSize: 14 }}>تم إرسال طلبك بنجاح ✅</p>}
        {status === 'error' && (
          <p style={{ color: '#C0392B', fontSize: 14 }}>تعذّر إرسال الطلب، حاول مرة أخرى.</p>
        )}

        <div className="hero-foot">
          <Link href="/seller" className="seller-link">
            عندك متجر أو بضاعة تبيعها؟ انضم كبائع ←
          </Link>
          <div className="pulse">
            <span className="live-dot" />
            <span><b>128</b> طلب نشط في آخر ساعة</span>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <span>© Hayasell — منصة تجارة ذكية ومتكاملة</span>
        <span>الجزائر · الخليج</span>
      </footer>
    </div>
  );
}
