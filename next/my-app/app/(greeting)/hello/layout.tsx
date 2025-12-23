// export const dynamic = 'auto';

import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export default function HelloLayout({ children }: PropsWithChildren) {
  return (
    <>
      <h1 className="">Hello Layout</h1>
      <div className="flex gap-3">
        <a href={'/'}>Home</a>
        <Link href={'/hello'}>Hello</Link>
        <Link href={'/hello/morning'}>Morning</Link>
        <Link href={'/hello/evening'}>Evening</Link>
        <Link href={'/hello/afternoon'}>Afternoon</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/intercept'}>Intercept</Link>
      </div>
      {/* <Suspense fallback="..."> */}
      <div className="border p-5 text-center">{children}</div>
      {/* </Suspense> */}
    </>
  );
}
