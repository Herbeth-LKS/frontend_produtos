import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import ProductList from './ProductList';

const App = () => {
  return (
    
      <Routes>
        
        <Route path="/login" element={<LoginForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/" element={<Navigate to="/login" />} />
        
      </Routes>
    
  );
};

export default App;
