import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import CardList from './components/CardList';
import Cart from './components/Cart';
import SingleView from './components/SingleView';
import productData from './data/full-products';
import CartProvider from './state/CartProvider';
import Order from './components/Orders';


function App() {

  return (
    <div className="App">
      <CartProvider>
      <Header />

      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/product/:id" element={<SingleView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </CartProvider>
    </div>
  );
}

export  default App;
