'use cache';

import { TIMES } from '@/app/constants';

export const generateStaticParams = async () =>
  TIMES.flatMap((time) => [
    {
      time,
    },
  ]);

export default async function Comments({
  params,
}: {
  params: Promise<{ time: string }>;
}) {
  const { time } = await params;
  return `Comments - ${time}`;
}
