import Image from 'next/image';
import Modal from '@/components/Modal';

export default async function InterceptId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://picsum.photos/id/${id}/info`);
  if (!res.ok) throw Error('can not contack');

  const { download_url } = await res.json();

  return (
    <Modal>
      <div>
        <h1>id: {id}</h1>
        <Image src={download_url} alt="image" width={400} height={400} />
      </div>
    </Modal>
  );
}
