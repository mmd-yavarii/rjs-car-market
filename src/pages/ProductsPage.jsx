import Loading from '../components/Loading';
import { useProducts } from '../contexts/ProductProvider';

function ProductsPage() {
  const { display, setDisplay, products } = useProducts();
  const { data, isLoading, error } = products;

  return (
    <div>
      {isLoading && <Loading />}

      {display.map((i) => (
        <h1>dsasvf</h1>
      ))}
    </div>
  );
}

export default ProductsPage;
