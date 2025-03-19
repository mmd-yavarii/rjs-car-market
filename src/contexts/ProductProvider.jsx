import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import API from '../services/config';

const ProductContext = createContext();

const initialState = {
  error: '',
  data: [],
  isLoading: true,
};
function reducer(state, action) {
  switch (action.type) {
    case 'SUCCESS':
      return { isLoading: false, error: '', data: action.payload };

    case 'FAILED':
      return { isLoading: false, data: [], error: action.payload };

    default:
      throw new Error('Action is not valied');
  }
}

function ProductProvider({ children }) {
  const [products, dispachProducs] = useReducer(reducer, initialState);
  const [display, setDisplay] = useState([]);

  useEffect(() => setDisplay(products.data), [products]);

  useEffect(() => {
    API.get('/products')
      .then((res) => dispachProducs({ type: 'SUCCESS', payload: res }))
      .catch((err) => dispachProducs({ type: 'FAILED', payload: err }));
  }, []);

  return <ProductContext.Provider value={{ display, setDisplay, products }}>{children}</ProductContext.Provider>;
}

function useProducts() {
  const context = useContext(ProductContext);
  return context;
}

export default ProductProvider;
export { useProducts };
