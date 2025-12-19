import { useSession } from '@/hooks/SessionContext';
import { PlusIcon } from 'lucide-react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Btn from './ui/btn';

export default function ItemLayout() {
  const {
    session: { cart },
  } = useSession();

  const navigate = useNavigate();

  return (
    <>
      <div className='w-full'>
        <div className='grid grid-cols-4'>
          <div className='border'>
            <h2>Cart</h2>
            <ul className='ml-2'>
              {cart.map(({ id, name }) => (
                <li key={id}>
                  <Link to={`${id}`}>{name}</Link>
                </li>
              ))}
              <li className='text-center'>
                <Btn onClick={() => navigate('0')} className=''>
                  <PlusIcon />
                </Btn>
              </li>
            </ul>
          </div>

          <div className='col-span-3'>
            <h1 className='text-xl'>ItemLayout</h1>
            <div className='border-2 p-3'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
