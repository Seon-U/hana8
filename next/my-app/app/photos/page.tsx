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

const getPhotos = async (n: number = 10): Promise<Photo[]> =>
  fetch('https://picsum.photos/v2/list?limit=9').then((res) => res.json());

export default function Photos() {
  const Photos = use(getPhotos());

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {Photos.map(({ id, author, download_url }) => (
        <Link
          className="opacity-80 duration-200 hover:scale-105 hover:opacity-100"
          key={id}
          href={`/photos/${id}`}
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
