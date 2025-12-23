import type { ReactNode } from 'react';

export default function galleryLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div>
      <div className="gap-3">galleryLayout</div>
      <div>{children}</div>
      <div>{modal}</div>
    </div>
  );
}
