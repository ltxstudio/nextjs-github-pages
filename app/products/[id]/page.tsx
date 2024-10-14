import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';

const fetcher = url => axios.get(url).then(res => res.data);

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-2xl mb-4">${product.price}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Buy with Crypto
      </button>
    </div>
  );
};

export default ProductPage;
