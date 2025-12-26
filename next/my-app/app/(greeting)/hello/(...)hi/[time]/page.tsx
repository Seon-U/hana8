'use cache';

type Props = {
  params: Promise<{ time: 'moring' | 'afternoon' | 'evening' }>;
};

export async function generateStaticParams() {
  return [{ time: 'morning' }, { time: 'afternoon' }, { time: 'evening' }];
}

export default async function TimePage({ params }: Props) {
  const { time } = await params;

  return (
    <h1>
      Hello/(..)hi Good <strong className="capitalize">{time}</strong>!
    </h1>
  );
}
