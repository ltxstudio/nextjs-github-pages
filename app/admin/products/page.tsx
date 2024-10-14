import { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const AdminProducts = () => {
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  };

  const createProduct = async () => {
    if (!session) {
      alert('You must be logged in to add products');
      return;
    }

    const response = await axios.post('/api/products', { name, price });
    setProducts([...products, response.data]);
    setName('');
    setPrice('');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Admin - Manage Products</h1>
      <button onClick={fetchProducts} className="bg-blue-500 text-white px-4 py-2 rounded">
        Load Products
      </button>
      <div className="mt-4">
        {products.map((product) => (
          <div key={product.id}>
            {product.name} - ${product.price}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="border px-4 py-2"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
          className="border px-4 py-2 ml-2"
        />
        <button onClick={createProduct} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AdminProducts;
