import { useSession, type ItemType } from '@/hooks/SessionContext';
import { useThrottle } from '@/hooks/useTimer';
import { PlusIcon } from 'lucide-react';
import {
  useDeferredValue,
  useState,
  useTransition,
  type ChangeEvent,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LabelInput from './ui/LabelInput';
import Spinner from './ui/Spinner';
import Button from './ui/button';

export default function Items() {
  const { session } = useSession();
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState<ItemType[]>([]);
  const [isSearching, startSearchTransition] = useTransition();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    startSearchTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const str = e.target.value;
      setSearchStr(str);
      setSearchResult(session.cart.filter((item) => item.name.includes(str)));
    });
  };

  const [searchStr, setSearchStr] = useState('');
  const debouncedSearchStr = useThrottle(searchStr, 500);
  const deferredStr = useDeferredValue(searchStr, 'xxx');

  return (
    <>
      <h1 className='text-2xl'>ITEMS</h1>
      <div>SR_Transition: {searchResult.map((item) => item.name).join()}</div>
      {isSearching ? (
        <Spinner />
      ) : (
        <h2 className='text-xl text-red-500'>
          {searchStr} : {deferredStr} : {debouncedSearchStr}
        </h2>
      )}
      <LabelInput
        label='Transition'
        onChange={handleSearch}
        autoComplete='off'
      />
      <ul>
        {session.cart
          ?.filter((item) => item.name.includes(debouncedSearchStr))
          .map((item) => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>
                {item.id}. {item.name}
              </Link>
              {/* <Item item={item} /> */}
            </li>
          ))}
        <li className='text-center'>
          {/* <Link
            to='/item'
            state={{
              item: { id: 0, name: 'New Item', price: 3000 },
            }}
            replace
          >
            <PlusIcon />
          </Link> */}

          <Button onClick={() => navigate()} className=''>
            <PlusIcon />
          </Button>
        </li>
      </ul>
    </>
  );
}
