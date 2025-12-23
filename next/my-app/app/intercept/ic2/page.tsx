import Image from 'next/image';
import Modal from '@/components/Modal';

export default function Ic2Page() {
  return (
    <Modal>
      <h1>'Ic2'</h1>
      <Image
        src="https://picsum.photos/id/0/5000/3333"
        alt="xxx"
        width={200}
        height={200}
        unoptimized
      />
      <button>button</button>
    </Modal>
  );
}
