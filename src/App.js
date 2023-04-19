//Pages elements
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { CreatePost } from './pages/CreatePost.jsx'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config.js';

import './App.css';

function App() {

  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <Router>
      {/* Navigation */}
      <nav>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/create-post"> Create Post</Link>
            <button className='logout-btn' onClick={signUserOut}>Log out</button>
          </>
        )}
      </nav>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path='/create-post' element={<CreatePost isAuth={isAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
