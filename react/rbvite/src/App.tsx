import { Route, Routes } from 'react-router-dom';
import Hello from './components/Hello';
import Home from './components/Home';
import My from './components/My';
import Posts from './components/Posts';
import Searchbar from './components/Searchbar';
import { SessionProvider } from './hooks/SessionContext';
import Nav from './Nav';

function App() {
  return (
    <SessionProvider>
      <Nav />
      <div className='grid place-items-center h-screen mx-2'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my' element={<My />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/hello' element={<Hello />} />
        </Routes>
        <Searchbar />
      </div>
    </SessionProvider>
  );
}

export default App;
