import './App.css';
import Dashboard from './Components/Dashboard'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home'
import Blog from './Components/Blog'
import Posts from './Components/Posts'
import Pages from './Components/Pages'
import Contact from './Components/Contact'
import Signup from './Components/Signup';
import Login from './Components/Login'
import DisplayBlog from './Components/DisplayBlog';
function App() {
  return (
    <div className='app'>
      <Router>
        <div className="container">
          <div className="dashboard">
            <Dashboard />
          </div>
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/posts/:userId' element={<Posts />} />
              <Route path='/posts/:userId/:title' element={<DisplayBlog />} />

             
              <Route path='/contact us' element={<Contact />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />


            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
