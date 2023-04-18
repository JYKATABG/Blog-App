//Pages elements
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { CreatePost } from './pages/CreatePost.jsx'

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/create-post"> Create Post</Link>

      </nav>
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/create-post' element={<CreatePost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
