import ProjectPage from '../components/ProjectPage/ProjectPage';

const Vaultbid = () => {
  return (
    <ProjectPage
      title="Vaultbid"
      description="VaultBid is a modern web application that brings the traditional auction experience online. Developed as a semester project, it showcases my skills in modular JavaScript, secure authentication, and responsive design through a fully functional auction system."
      imageUrl="/images/VaultBid.jpg"
      imageCaption="Vaultbid - A Modern Auction Platform"
      liveLink="https://vaultbid.netlify.app"
      githubLink="https://github.com/omro0107/VaultBid/blob/main/README.md"
      content={`
        VaultBid is a sophisticated web application that transforms the traditional auction house experience into a fully digital platform. Developed as a comprehensive semester project, this application demonstrates my proficiency in modern JavaScript development and frontend architecture through the creation of a fully interactive auction website.

        Built with vanilla JavaScript (ES6+ modules) and styled using Tailwind CSS, VaultBid was designed from the ground up with a focus on performance, responsiveness, and maintainability. Vite was used as the build tool to ensure a fast development experience and optimized production deployment. The application’s architecture follows a modular structure, separating UI components, services, views, and utilities for clean and scalable code.

        The platform features a secure authentication system with token management, route protection, and encrypted storage. Users can register, log in, and manage their profiles, including viewing their auction history and current bids. They can also create auction listings with detailed descriptions and images, and participate in live bidding with real-time feedback.

        A key focus was ensuring a seamless and responsive user experience. From dynamic content loading and form validation to smooth pagination and mobile-optimized design, every feature was crafted to enhance usability. I also implemented security best practices, including HTTPS communication, input sanitization, and environment-based API management.

        VaultBid’s development workflow integrated ESLint, Prettier, and Husky for consistent code quality, while Git hooks ensured proper commit practices. The platform was deployed via Netlify with secure environment variable handling and global CDN support.

        This project allowed me to explore advanced JavaScript patterns, service-based architecture, and secure application development. I plan to enhance VaultBid further by integrating real-time notifications using WebSockets, adding payment functionality, and potentially expanding into mobile platforms.
      `}
    />
  );
};

export default Vaultbid;
