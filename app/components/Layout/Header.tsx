import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-xl font-bold">E-commerce Shop</a>
        </Link>
        <div>
          {session ? (
            <>
              <Link href="/profile">
                <a className="mr-4">Profile</a>
              </Link>
              <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <a className="bg-blue-500 px-4 py-2 rounded">Login</a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
