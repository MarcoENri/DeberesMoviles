Markdown Fabrica

### Archivos Principales

- **`store.js`**: Este archivo define el estado global de la aplicación y las acciones para modificar este estado utilizando Zustand.

  ```javascript
  import create from 'zustand';

  
  const initialState = {
    products: [],
    productionCapacity: 100,
  };

  
  const useStore = create((set) => ({
    ...initialState,

   
    addProduct: (product) =>
      set((state) => ({
        products: [...state.products, product],
      })),

    increaseProductionCapacity: (amount) =>
      set((state) => ({
        productionCapacity: state.productionCapacity + amount,
      })),

   
    produceProducts: (amount) =>
      set((state) => {
        const productsProduced = [];
        for (let i = 0; i < amount; i++) {
          productsProduced.push({ name: `Product ${state.products.length + i + 1}` });
        }
        return {
          products: [...state.products, ...productsProduced],
        };
      }),

    
    distributeProducts: (destination) =>
      set((state) => {
        console.log(`Distributing ${state.products.length} products to ${destination}`);
        return {
          products: [],
        };
      }),
  }));

  export default useStore;
  ```

- **`FactoryDashboard.js`**: Este archivo contiene el componente React `FactoryDashboard` que utiliza el estado y las acciones del store definido en `store.js` para mostrar información sobre la fábrica y permitir interacciones como la producción y distribución de productos.

  ```javascript
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
  ```

### Funcionalidades Principales

- **Producción de Productos**
  - La función `produceProducts(amount)` en el store simula la producción de una cantidad especificada de productos. Cada producto producido se añade al estado `products` con un nombre único.
  - En `FactoryDashboard.js`, el botón "Produce Products" llama a esta función para simular la producción de 10 productos al hacer clic.

- **Distribución de Productos**
  - La función `distributeProducts(destination)` en el store simula la distribución de productos a un destino específico (por ejemplo, un almacén). En este ejemplo, simplemente muestra un mensaje en la consola indicando la cantidad de productos distribuidos y el destino.
  - En `FactoryDashboard.js`, el botón "Distribute Products" llama a esta función para simular la distribución de todos los productos al hacer clic.
