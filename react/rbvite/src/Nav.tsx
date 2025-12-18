import { Link } from 'react-router-dom';
import { useSession } from './hooks/SessionContext';

export default function Nav() {
  const {
    session: { loginUser },
  } = useSession();
  return (
    <nav className='flex justify-between mx-5'>
      <ul className='flex gap-5'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/my'}>My</Link>
        </li>
        <li>
          <Link to={'/hello'}>Hello</Link>
        </li>
        <li>
          <Link to={'/posts'}>Posts</Link>
        </li>
      </ul>
      {loginUser?.name ? (
        <h2>{loginUser?.name}</h2>
      ) : (
        <Link to={'/login'}>Login</Link>
      )}
    </nav>
  );
}
