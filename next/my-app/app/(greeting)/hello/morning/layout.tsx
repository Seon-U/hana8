// export const dynamic = 'auto';

import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export default function MorningLayout({ children }: PropsWithChildren) {
  return (
    <>
      <h1 className="">Morning Layout</h1>
      <div className="flex gap-3">
        <a href={'/'}>Home</a>
        <Link href={'/hello'}>Hello</Link>
        <Link href={'/hello/morning'}>Morning</Link>
      </div>
      <div className="border p-5 text-center">{children}</div>
    </>
  );
}
