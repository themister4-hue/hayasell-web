export default function Brand({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <div className="brand">
      <svg className="brand-glyph" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="bg1" x1="10" y1="8" x2="90" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2F6BDB" />
            <stop offset="1" stopColor="#22B573" />
          </linearGradient>
        </defs>
        <path
          d="M20,30 C20,17.8 30,9.5 40,20 C48,28 52,28 60,20 C70,9.5 80,17.8 80,30 C80,42.2 70,50.5 60,40 C52,32 48,32 40,40 C30,50.5 20,42.2 20,30 Z"
          stroke="url(#bg1)"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path d="M33,44 L67,16" stroke="url(#bg1)" strokeWidth="7" strokeLinecap="round" />
        <path
          d="M67,16 L54,17.5 M67,16 L65,29"
          stroke="url(#bg1)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div>
        <div className="brand-mark">HAYASELL</div>
        {withTagline && <div className="brand-sub">منصة تجارة ذكية ومتكاملة</div>}
      </div>
    </div>
  );
}
