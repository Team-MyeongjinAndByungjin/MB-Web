import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Main, Login, Signup, Post } from './pages';
import axios from 'axios';
import {Cookies} from 'react-cookie'

function App() {

  axios.defaults.baseURL = "http://3.38.34.230:8080";

  const cookies = new Cookies();

  const getCookie = (name) => {
    return cookies.get(name); 
  }

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(()=>{
    if(getCookie("token")) 
      axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie("token")}`
    else if(pathname !== "/login" && pathname !== "/signup")
      navigate("/login")
  })

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
