import { use } from 'react';
import { TIMES } from '@/app/constants';

// export const generateStaticParams = async () => {
//   let cmt = 1;

//   return TIMES.flatMap((time) =>
//     Array.from({ length: 3 }, () => ({
//       time,
//       cmt: String(cmt++),
//     })),
//   );
// };

export const generateStaticParams = async () =>
  TIMES.flatMap((time, idx) =>
    [1, 2, 3].map((cmt) => ({ time, cmt: String(idx * 3 + cmt) })),
  );

export default function CmtPage({
  params,
}: {
  params: Promise<{ time: string; cmt: string }>;
}) {
  const { time, cmt } = use(params);
  return (
    <div>
      Good {time} - {cmt} comments!
    </div>
  );
}
