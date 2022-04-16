import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
