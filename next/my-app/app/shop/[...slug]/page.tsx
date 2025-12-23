import { use } from 'react';

type Props = {
  params: Promise<{ slug: string[] | number[] }>;
};

export default function Shop({ params }: Props) {
  const { slug } = use(params);

  return <>Slugs: {slug}</>;
}
