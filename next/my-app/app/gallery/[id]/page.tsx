import Image from 'next/image';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function galleryDetail({ params }: Props) {
  const { id } = await params;

  const res = await fetch(`https://picsum.photos/id/${id}/info`);
  const { download_url } = await res.json();

  return (
    <div>
      <h1>id: {id}</h1>
      <Image src={download_url} alt="image" width={400} height={400} />
    </div>
  );
}
