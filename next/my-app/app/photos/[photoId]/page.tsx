'use cache';

import Image from 'next/image';
import { blurDataURL_dark } from '@/app/constants';
import type { Photo } from '../page';

type Props = {
  params: Promise<{ photoId: string }>;
};

// export const dynamicParams = false;

export const generateStaticParams = async () => {
  const photos: Awaited<Photo[]> = await fetch(
    `https://picsum.photos/v2/list?limit=${10}`,
  ).then((res) => res.json());

  return photos.map(({ id: photoId }) => ({ photoId }));
};

export default async function PhotoView({ params }: Props) {
  const { photoId } = await params;
  // if (photoId > '10') notFound;
  const { author, download_url, width, height } = (await fetch(
    `https://picsum.photos/id/${photoId}/info`,
  ).then((res) => res.json())) as Photo;

  return (
    <>
      <h1>{author}</h1>
      <div>
        <Image
          src={download_url}
          alt={author}
          width={width}
          height={height}
          blurDataURL={blurDataURL_dark}
        />
      </div>
    </>
  );
}
