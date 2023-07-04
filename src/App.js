import { Routes, Route, Router } from 'react-router-dom';
import { Main, Login, Signup, Post } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/post' element={<Post/>}/>
      </Routes>
    </>
  );
}

export default App;
