//Pages elements
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { CreatePost } from './pages/CreatePost.jsx'

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/create-post' element={<CreatePost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
