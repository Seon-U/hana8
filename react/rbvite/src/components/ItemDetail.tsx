import { useSession } from '@/hooks/SessionContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Button from './ui/button';

export default function ItemDetail() {
  const { id } = useParams();
  const navigation = useNavigate();
  const {
    session: { cart },
  } = useSession();

  if (Number(id) === 0) return <Navigate to={'edit'} replace />;

  const item = cart.find((item) => item.id === Number(id));
  if (!item) return <Navigate to={'/items'} />;

  return (
    <>
      {item && (
        <>
          <h1>
            {id} . {item.name}
          </h1>
          <h2>price: {item.price}</h2>
          {item.isSoldOut && <h2>Sold out now</h2>}
          <div className='flex gap-4 mt-10'>
            <Button onClick={() => navigation('/items')}>목록보기</Button>
            <Button onClick={() => navigation('edit')}>수정하기</Button>
          </div>
        </>
      )}
    </>
  );
}
