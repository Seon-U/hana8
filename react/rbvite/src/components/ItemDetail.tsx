import { type ItemType } from '@/hooks/SessionContext';
import { Link, useOutletContext } from 'react-router-dom';

export default function ItemDetail() {
  const item = useOutletContext<ItemType>();
  // const { id } = useParams();
  // const {
  //   session: { cart },
  // } = useSession();

  // if (Number(id) === 0) return <Navigate to={'edit'} replace />;

  // const item = cart.find((item) => item.id === Number(id));
  // if (!item) return <Navigate to={'/items'} />;

  return (
    <>
      <h1 className='text-lg'>
        {item.id} . {item.name} : {item.price.toLocaleString()}원
      </h1>
      <div className='flex gap-5 justify-between mt-3'>
        <Link to='/items'>List</Link>
        <Link to='edit'>Edit</Link>
      </div>
    </>
  );
}
