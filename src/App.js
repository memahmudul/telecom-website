import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='features' element={<Features/>}/>
      <Route path='pricing' element={<Pricing/>}/>

      </Route>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
