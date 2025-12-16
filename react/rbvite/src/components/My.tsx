import { PlusIcon } from 'lucide-react';
import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { useFetch } from '../hooks/fetch';
import { useInterval } from '../hooks/interval';
import { useSession, type ItemType } from '../hooks/SessionContext';
import Item from './Item';
import Login from './Login';
import Profile, { type ProfileHandler } from './Profile';
import Button from './ui/Button';

export default function My() {
  const { session } = useSession();
  const [badSec, setBadSec] = useState(0);
  const [goodSec, setGoodSec] = useState(0);

  const [isAdding, toggleAdding] = useReducer((pre) => !pre, false);
  // const toggleAdding = () => setAdding((pre) => !pre);
  // const [isAdding, setAdding] = useState(false);
  const profileHandlerRef = useRef<ProfileHandler>(null);

  const item101 = session.cart.find((item) => item.id === 101);
  useEffect(() => {
    console.log('🚀 ~ item101:', item101);
  }, [item101]);

  useEffect(() => {
    setInterval(() => setBadSec((p) => p + 1), 1000);
  }, []);

  const { data } = useFetch<ItemType[]>('/data/sample.json');

  const totalPrice = useMemo(
    () => session.cart.reduce((acc, item) => acc + item.price, 0),
    [session.cart]
  );
  // setData(newData);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   fetch('/data/sample.json', { signal })
  //     .then((res) => res.json())
  //     .then(setData);

  //   return () => controller.abort();
  // }, []);

  // useEffect(() => {
  //   const intl = setInterval(() => setGoodSec((p) => p + 1), 1000);
  //   return () => clearInterval(intl);
  // }, []);

  // const f = (...args) => {
  //   setGoodSec(...args);
  // };
  const ff = (n: number) => {
    console.log('🚀 ~ n:', n, goodSec); // n은 영원히 1 (: )
    // setGoodSec(n + 1); // 위 goodSec는 영원히 0
    setGoodSec((p) => p + 1);
  };

  console.log('🚀 ~ goodSec:', goodSec);
  useInterval(ff, 1000, goodSec + 1);
  // useInterval(setGoodSec, 1000, goodSec + 1);
  return (
    <>
      {session?.loginUser ? <Profile ref={profileHandlerRef} /> : <Login />}
      badSec: {badSec}, goodSec: {goodSec}
      <hr />
      <a
        href='#!'
        onClick={(e) => {
          e.preventDefault();
          profileHandlerRef.current?.showLoginUser();
          console.log('xxx>>', profileHandlerRef.current?.xxx);
        }}
      >
        {item101?.name}
      </a>
      <h2 className='text-xl'>Tot: {totalPrice.toLocaleString()}원</h2>
      <ul>
        {(session.cart.length ? session.cart : data)?.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
        <li className='text-center'>
          {isAdding ? (
            <Item
              item={{ id: 0, name: 'New Item', price: 3000 }}
              toggleAdding={toggleAdding}
            />
          ) : (
            <Button onClick={toggleAdding}>
              <PlusIcon />
            </Button>
          )}
        </li>
      </ul>
    </>
  );
}
