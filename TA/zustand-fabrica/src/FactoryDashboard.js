import React from 'react';
import useStore from './store';

const FactoryDashboard = () => {
  const products = useStore((state) => state.products);
  const productionCapacity = useStore((state) => state.productionCapacity);
  const produceProducts = useStore((state) => state.produceProducts);
  const distributeProducts = useStore((state) => state.distributeProducts);

  const handleProduce = () => {
    produceProducts(10); 
  };

  const handleDistribute = () => {
    distributeProducts('Warehouse'); 
  };

  return (
    <div>
      <h2>Factory Dashboard</h2>
      <p>Production Capacity: {productionCapacity}</p>
      <button onClick={handleProduce}>Produce Products</button>
      <button onClick={handleDistribute}>Distribute Products</button>
      <h3>Products:</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FactoryDashboard;
