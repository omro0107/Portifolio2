import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-cormorant">Portfolio</Link>
        <nav className="flex gap-8">
          <Link to="/" className="text-gray-400 font-poppins hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-gray-400 font-poppins hover:text-white transition-colors">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
