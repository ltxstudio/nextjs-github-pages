import { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const CheckoutPage = () => {
  const { data: session } = useSession();
  const [items, setItems] = useState([{ productId: 1, quantity: 1 }]);
  const [total, setTotal] = useState(100);

  const handleCheckout = async () => {
    if (!session) {
      alert('You must be logged in to checkout');
      return;
    }

    const response = await axios.post('/api/orders', {
      userId: session.user.id,
      items,
      total,
    });

    console.log(response.data);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Checkout</h1>
      <div className="mt-4">
        {items.map((item, index) => (
          <div key={index} className="mb-2">
            Product {item.productId} - Quantity: {item.quantity}
          </div>
        ))}
        <div className="mb-4">
          <strong>Total:</strong> ${total}
        </div>
      </div>
      <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 rounded">
        Complete Purchase
      </button>
    </div>
  );
};

export default CheckoutPage;
