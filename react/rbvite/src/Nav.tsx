import { Link } from 'react-router-dom';
import { useSession } from './hooks/SessionContext';

export default function Nav() {
  const {
    session: { loginUser },
  } = useSession();
  return (
    <nav className='flex justify-between'>
      <ul>
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
        <li>
          {loginUser?.name ? (
            <small>{loginUser?.name}</small>
          ) : (
            <Link to={'/login'}>Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
