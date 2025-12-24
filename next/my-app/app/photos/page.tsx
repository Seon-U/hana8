import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

export type Photo = {
  id: string;
  author: string;
  download_url: string;
  width: number;
  height: number;
};

export const revalidate = 86400; // 10 sec

const getPhotos = async (n: number = 20): Promise<Photo[]> =>
  fetch(`https://picsum.photos/v2/list?limit=${n}`, {
    cache: 'force-cache',
  }).then((res) => res.json());

export default function Photos() {
  const Photos = use(getPhotos());

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {Photos.map(({ id, author, download_url }) => (
        <Link
          className="opacity-80 duration-200 hover:scale-105 hover:opacity-100"
          key={id}
          href={`/photos/${id}`}
          // prefetch={false}
        >
          <Image
            src={download_url}
            alt={author}
            width={200}
            height={200}
            quality={70}
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
}
