'use client';

import { useState } from 'react';

export default function LangSwitch() {
  const [lang, setLang] = useState<'ar' | 'fr' | 'en'>('ar');

  const handleClick = (l: 'ar' | 'fr' | 'en') => {
    setLang(l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="lang-switch" role="group" aria-label="اختيار اللغة">
      <button className={lang === 'ar' ? 'active' : ''} onClick={() => handleClick('ar')}>
        ع
      </button>
      <button className={lang === 'fr' ? 'active' : ''} onClick={() => handleClick('fr')}>
        FR
      </button>
      <button className={lang === 'en' ? 'active' : ''} onClick={() => handleClick('en')}>
        EN
      </button>
    </div>
  );
}
