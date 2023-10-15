import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Toyko from './pages/ToyKo';
import Phuket from './pages/Phuket';
import Siemreap from './pages/Siemreap';
import Beijing from './pages/Beijing';
import Maldiv from './pages/Maldiv';
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
        <Route path='/Toyko' element={<Toyko />} />
        <Route path='/Phuket' element={<Phuket />} />
        <Route path='/Siemreap' element={<Siemreap />} />
        <Route path='/Beijing' element={<Beijing />} />
      </Routes>
    </Router>
  );
}

export default App;
