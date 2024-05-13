import React, { useState } from 'react';
import useStore from './store';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const addProduct = useStore((state) => state.addProduct);

  const handleAddProduct = () => {
    if (productName.trim() !== '') {
      addProduct({ name: productName });
      setProductName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter product name"
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
