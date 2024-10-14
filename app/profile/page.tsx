import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session) {
      axios.get(`/api/user/${session.user.id}`).then((res) => {
        setUser(res.data);
      });
    }
  }, [session]);

  if (!session) return <div>You need to be authenticated to view this page.</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Your Products</h2>
      <div className="mt-4">
        {user.products.map((product) => (
          <div key={product.id} className="mb-2">
            {product.name} - ${product.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
