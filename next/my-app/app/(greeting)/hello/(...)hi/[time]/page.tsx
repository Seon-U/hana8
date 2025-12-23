import { use } from 'react';

type Props = {
  params: Promise<{ time: 'moring' | 'afternoon' | 'evening' }>;
};

// export async function generateStaticParams() {
//   return [{ time: 'morning' }, { time: 'afternoon' }, { time: 'evening' }];
// }

export default function TimePage({ params }: Props) {
  const { time } = use(params);

  return (
    <h1>
      Hello/(..)hi Good <strong className="capitalize">{time}</strong>!
    </h1>
  );
}
