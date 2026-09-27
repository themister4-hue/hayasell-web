'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RoleToggle() {
  const pathname = usePathname();

  return (
    <div className="role-toggle" role="group" aria-label="اختيار الدور">
      <Link href="/seller" className={pathname === '/seller' ? 'active' : ''}>
        🏪 بائع
      </Link>
      <Link href="/buyer" className={pathname === '/buyer' ? 'active' : ''}>
        👤 مشتري
      </Link>
    </div>
  );
}
