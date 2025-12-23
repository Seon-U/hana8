import type { ReactNode } from 'react';

export default function PhotosLayout({
  children,
  viewer,
}: {
  children: ReactNode;
  viewer: ReactNode;
}) {
  return (
    <>
      <h1 className="text-center text-xl">Photos</h1>
      <div>{children}</div>
      <div>{viewer}</div>
    </>
  );
}
