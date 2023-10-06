import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maldiv from './pages/Maldiv';
import MyNavbar from './components/MyNavbar';
import Toyko from './pages/ToyKo';
function App() {
  return (
    <Router>
        <MyNavbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/Maldiv'  element={<Maldiv />} />
        <Route path='/'  element={<Maldiv />} />
        <Route path='/Toyko' element={<Toyko />} />
      </Routes>
    </Router>
  );
}

export default App;
