const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="max-w-[1200px] mx-auto px-8 py-8">
        <div className="text-center">
          <p className="text-gray-400 font-poppins text-sm">
            © {currentYear} Oda Rosenkilde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
