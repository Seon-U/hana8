// 'use client';

import { use } from 'react';

// import { useParams } from 'next/navigation';
// const { id } = useParams<{ id: string }>();

type Props = {
  params: Promise<{ id: number }>;
};

export default function HelloId({ params }: Props) {
  const { id } = use(params);
  return `Hello id is ${id}`;
}
