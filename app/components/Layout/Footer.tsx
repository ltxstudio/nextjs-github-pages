const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} E-commerce Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
