import Image from 'next/image';
import Link from 'next/link';

type result = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export default async function GalleryList() {
  const results: result[] = await fetch(
    'https://picsum.photos/v2/list?limit=9',
  ).then((res) => res.json());

  return (
    <div className="grid grid-cols-3">
      {results.map(({ id, download_url }) => (
        <Link key={id} href={`/gallery/${id}`}>
          <Image src={download_url} alt="images" width={300} height={300} />
        </Link>
      ))}
    </div>
  );
}
