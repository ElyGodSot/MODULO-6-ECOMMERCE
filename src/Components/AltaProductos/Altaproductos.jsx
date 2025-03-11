import React, { useState } from 'react';
import { useItemsContext } from '../../Hook/useItemsContext';


function Altaproductos() {
    const {product,setProduct}= useItemsContext()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...product,
      id: generateUniqueId(),
    };

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    setProduct({
      product_name: '',
      description: '',
      price: '',
      category: '',
      brand: '',
      sku: '',
      image: '',
    });
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name</label>
        <input
          type="text"
          name="product_name"
          value={product.product_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>SKU</label>
        <input
          type="text"
          name="sku"
          value={product.sku}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL</label>
        <input
          type="url"
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default Altaproductos;