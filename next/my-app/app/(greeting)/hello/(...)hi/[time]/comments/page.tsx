'use cache';

export const generateStaticParams = async () => [{ time: 'morningX' }];

export default async function Comments({
  params,
}: {
  params: Promise<{ time: string }>;
}) {
  const { time } = await params;
  return `Comments - ${time}`;
}
