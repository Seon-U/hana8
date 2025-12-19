import { useSession, type ItemType } from '@/hooks/SessionContext';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Btn from './ui/btn';
import Button from './ui/button';

export default function ItemLayout() {
  const {
    session: { cart },
  } = useSession();

  const navigate = useNavigate();
  const [item, setItem] = useState<ItemType>();

  return (
    <>
      <div className='w-full'>
        <div className='grid grid-cols-4'>
          <div className='border'>
            <h2>Cart</h2>
            <ul className='ml-2'>
              {cart.map((item) => (
                <li key={item.id}>
                  {/* <Link to={`${item.id}`}>{item.name}</Link> */}
                  <Button
                    onClick={() => {
                      setItem(item);
                      navigate(`${item.id}`);
                    }}
                    variant={'link'}
                    className='h-4'
                  >
                    {item.name}
                  </Button>
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
              <Outlet context={item} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
