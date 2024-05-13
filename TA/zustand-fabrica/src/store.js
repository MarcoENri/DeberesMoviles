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
