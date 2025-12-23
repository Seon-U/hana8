// export const dynamic = 'auto';
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import SayHello from './SayHello';

export default function HelloPage() {
  return (
    <>
      <h1 className="">Hello Page</h1>
      <div suppressHydrationWarning>
        <Suspense fallback={<h1>...</h1>}>
          <SearchParamId />
        </Suspense>
      </div>
    </>
  );
}

function SearchParamId() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const pathname = usePathname();

  const id = searchParams.get('id');
  const name = searchParams.get('name');

  const make200 = () => {
    params.set('id', `200`);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <SayHello name={name ?? 'Next'} />
      <button onClick={make200}>ID: {id}</button>
    </>
  );
}
