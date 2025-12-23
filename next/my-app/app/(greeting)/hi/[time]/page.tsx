import { use } from 'react';
import { TIMES } from '../../../constants';

type Props = {
  params: Promise<{ time: 'moring' | 'afternoon' | 'evening' }>;
};

// export async function generateStaticParams() {
//   return [{ time: 'morning' }, { time: 'afternoon' }, { time: 'evening' }];
// }

export const generateStaticParams = async () =>
  TIMES.map((time) => ({
    time,
  }));

export default function TimePage({ params }: Props) {
  const { time } = use(params);

  return (
    <h1>
      Good <strong className="capitalize">{time}</strong>!
    </h1>
  );
}
