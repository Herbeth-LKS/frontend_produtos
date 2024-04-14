import './ProductList.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/list/products');
      const sortedProducts = response.data.sort((a, b) => a.value - b.value);
      setProducts(sortedProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  return (    <div className="container">
  <h2 className="title">Lista de Produtos</h2>
  <ul>
    {products.map(product => (
      <li className="product" key={product.id}>
        <div className="product-name">{product.name}</div>
        <div className="product-value">Valor: {product.value}</div>
        <div className="product-quantity">Quantidade em Estoque: {product.quantity}</div>
        {/* Adicione um evento onClick para abrir a janela modal de detalhes do produto */}
      </li>
    ))}
  </ul>
</div>
);
};

export default ProductList;
