// export const dynamic = 'auto';

import type { PropsWithChildren } from 'react';

export default function HelloTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <h1 className="">Morning Template</h1>
      <div className="border p-5 text-center">{children}</div>
    </>
  );
}
