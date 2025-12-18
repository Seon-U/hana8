import { useActionState } from 'react';
import Spinner from './ui/Spinner';

type siteText = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Searchbar() {
  const [searchResult, search, isPending] = useActionState<
    siteText[],
    FormData
  >(async (_prev, formData: FormData) => {
    const userId = formData.get('userId') as string;
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );

      if (res.ok) return res.json();
    } catch (err) {
      console.error('errror!!!!!!!!!!!!!!!', err);
      return [];
    }
  }, []);

  return (
    <div className='h-full'>
      <form action={search} className='flex'>
        <input name='userId' placeholder='id' />
        <button type='submit'>search</button>
      </form>
      {isPending ? (
        <Spinner />
      ) : (
        searchResult?.map((item) => {
          return (
            <div key={item.id} className='border p-4'>
              <h2 className='font-bold'>id: {item.userId}</h2>
              <h2 className='font-bold'>title: {item.title}</h2>
              <h3 className=''>body: {item.body}</h3>
            </div>
          );
        })
      )}
    </div>
  );
}
