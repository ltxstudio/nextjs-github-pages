import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');

  const fetchProducts = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  };

  const createPayment = async () => {
    const response = await axios.post('/api/payment', { amount, currency });
    console.log(response.data);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">My E-commerce Shop</h1>
      <button onClick={fetchProducts} className="bg-blue-500 text-white px-4 py-2 rounded">
        Load Products
      </button>
      <div className="mt-4">
        {products.map((product) => (
          <div key={product.id} className="mb-2">
            <Link href={`/products/${product.id}`}>
              <a className="text-blue-500">{product.name}</a>
            </Link> - ${product.price}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="border px-4 py-2"
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="border px-4 py-2 ml-2">
          <option value="BTC">BTC</option>
          <option value="USDT">USDT</option>
          <option value="LTC">LTC</option>
          <option value="TRX">TRX</option>
        </select>
        <button onClick={createPayment} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
          Pay with Crypto
        </button>
      </div>
    </div>
  );
};

export default Home;
