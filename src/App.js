import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import {Route, Routes } from 'react-router-dom';
// import './pages/shop/shop.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import  { Header} from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
