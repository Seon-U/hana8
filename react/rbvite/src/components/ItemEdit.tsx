import { useSession } from '@/hooks/SessionContext';
import { FilePlus2Icon, RotateCcwIcon, SaveIcon } from 'lucide-react';
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type RefObject,
} from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import LabelInput from './ui/LabelInput';
import Btn from './ui/btn';

export default function ItemEdit() {
  const {
    session: { cart },
    saveItem,
  } = useSession();

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [isEditing, setEditing] = useState(!id);
  const [hasDirty, setDirty] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) nameRef.current?.focus();
  }, [isEditing]);

  const item = !id
    ? { id, name: '', price: 3000 }
    : cart.find((item) => item.id === id);
  if (!item) return <Navigate to={'/items'} />;

  const checkDirty = () => {
    setDirty(
      item.name !== nameRef.current?.value ||
        item.price !== Number(priceRef.current?.value)
    );
  };

  const editItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    let msg;
    let ref: RefObject<HTMLInputElement | null> | null = null;

    if (!name) {
      msg = 'Input the item name!';
      ref = nameRef;
    }

    if (!price) {
      ref = priceRef;
    }

    if (msg) {
      alert(msg);
      if (ref && ref.current) ref.current.focus();
      return;
    }

    const savedId = saveItem({
      id: item.id,
      name: name ?? '',
      price: Number(price),
    });

    // 정리작업..
    if (nameRef.current && priceRef.current) {
      nameRef.current.value = '';
      priceRef.current.value = '';
      nameRef.current.focus();
    }
    setEditing(false);
    setDirty(false);

    navigate(`/items/${savedId}`);
  };

  const cancelEdit = () => {
    setEditing(!isEditing);
    // if (nameRef.current && priceRef.current) {
    //   nameRef.current.value = item.name;
    //   priceRef.current.value = String(item.price);
    // }
    navigate(-1);
  };

  return (
    <>
      <form onSubmit={editItem} className='flex gap-1'>
        {/* <input type='number' ref={idRef} placeholder='id...' className='w-14' /> */}
        <LabelInput
          ref={nameRef}
          defaultValue={item.name}
          onChange={checkDirty}
          placeholder='name...'
        />
        <LabelInput
          type='number'
          ref={priceRef}
          defaultValue={item.price}
          onChange={checkDirty}
          placeholder='price...'
        />
        <Btn onClick={cancelEdit} type='reset' className=''>
          <RotateCcwIcon />
        </Btn>
        {hasDirty && (
          <Btn type='submit' className='text-blue-500' disabled={!hasDirty}>
            {item.id ? <SaveIcon /> : <FilePlus2Icon />}
          </Btn>
        )}
      </form>
    </>
  );
}
