const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="max-w-[1200px] mx-auto px-8 py-8">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.linkedin.com/in/oda-marie-rosenkilde-9b0919287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors font-poppins text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/omro0107"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors font-poppins text-sm"
            >
              GitHub
            </a>
          </div>
          
          <p className="text-gray-400 font-poppins text-sm">
            © {currentYear} Oda Rosenkilde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
