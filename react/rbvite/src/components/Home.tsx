import { useCounter } from '@/hooks/CounterContext';

export default function Home() {
  // const [count, setCount] = useState(0);
  const { count } = useCounter();

  return (
    <>
      <h1 className='text-3xl'>{count < 50 && 'Welcome'}</h1>
      <h1 className='text-3xl'>count: {count}</h1>
    </>
  );
}
