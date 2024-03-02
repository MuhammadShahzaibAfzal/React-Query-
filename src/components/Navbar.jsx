import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl uppercase">React Query</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
