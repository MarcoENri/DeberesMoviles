Markdown Fabrica

### Documentación de Zustand en React con TypeScript

#### ¿Qué es Zustand?

Zustand es una biblioteca ligera de gestión del estado para React que utiliza un enfoque basado en hooks y funciones puras para definir y acceder al estado de la aplicación. Proporciona una forma sencilla de gestionar el estado global en aplicaciones React sin la necesidad de bibliotecas más complejas como Redux.

#### Instalación

Para comenzar a utilizar Zustand en el proyecto de React con TypeScript, primero debes instalarlo desde npm:

```bash
npm install zustand
```

#### Definir un Store

En Zustand, un store es donde se define y se gestiona el estado de la aplicación. Para crear un store con Zustand, se utiliza la función `create`:

```typescript
// store.ts
import create, { SetState } from 'zustand';

interface Product {
  name: string;
  quantity: number;
}

interface ProductStore {
  products: Product[];
  addToProduction: (product: Product) => void;
  distributeProducts: () => void;
}

const useStore = create<ProductStore>((set: SetState<ProductStore>) => ({
  products: [],
  addToProduction: (product) =>
    set((state) => ({
      ...state,
      products: [...state.products, product],
    })),
  distributeProducts: () =>
    set((state) => ({
      ...state,
      products: [],
    })),
}));

export default useStore;
```

En este ejemplo, hemos definido un store llamado `useStore` que contiene un estado inicial con una lista de productos y dos funciones para agregar productos a la lista y distribuir los productos.

#### Uso en Componentes React

Para utilizar el estado del store en tus componentes React, puedes usar el hook `useStore` que proporciona Zustand:

```typescript
// ProductProduction.tsx
import React from 'react';
import useStore from './store';

const ProductProduction: React.FC = () => {
  const addToProduction = useStore((state) => state.addToProduction);

  const handleAddProduct = () => {
    const newProduct = { name: 'Nuevo Producto', quantity: 1 };
    addToProduction(newProduct);
  };

  return (
    <div>
      <h2>Producción de Productos</h2>
      <button onClick={handleAddProduct}>Agregar Producto</button>
    </div>
  );
};

export default ProductProduction;
```

En este componente `ProductProduction`, hemos utilizado `useStore` para acceder a la función `addToProduction` del store y añadir un nuevo producto cuando se hace clic en un botón.

#### Integración en la Aplicación Principal

Finalmente, integra tus componentes en la aplicación principal (`App.tsx`) para utilizar el estado del store en toda la aplicación:

```typescript
// App.tsx
import React from 'react';
import ProductProduction from './ProductProduction';
import ProductDistribution from './ProductDistribution';

const App: React.FC = () => {
  return (
    <div>
      <h1>Administrar Producción y Distribución</h1>
      <ProductProduction />
      <ProductDistribution />
    </div>
  );
};

export default App;
```

### Notas Finales

Esta documentación proporciona una introducción básica al uso de Zustand en una aplicación de React con TypeScript. Puedes expandir este ejemplo agregando más funciones al store, creando más componentes que utilicen el estado global y explorando las capacidades avanzadas de Zustand según las necesidades de tu proyecto.

Espero que esta documentación te sea útil para comprender cómo integrar y utilizar Zustand en tu aplicación de React con TypeScript. Si tienes más preguntas o necesitas más información, no dudes en preguntar. ¡Buena suerte con tu proyecto!
