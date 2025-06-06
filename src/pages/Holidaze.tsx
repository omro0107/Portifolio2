import ProjectPage from '../components/ProjectPage/ProjectPage';

const Holidaze = () => {
  return (
    <ProjectPage
      title="Holidaze"
      description="Holidaze is a comprehensive venue booking platform developed as part of the Noroff second year Project Exam. This full-stack application enables users to discover, book, and manage accommodation venues through an intuitive and responsive interface."
      imageUrl="/images/Holidaze.jpg"
      imageCaption="Holidaze - Holiday Booking Platform"
      liveLink="https://holidazetravel.netlify.app/"
      githubLink="https://github.com/omro0107/Holidaze/blob/main/README.md"
      content={`Holidaze is a full-featured venue booking platform developed as part of my second-year exam at Noroff. This full-stack application enables users to browse, book, and manage accommodation venues through a modern, responsive interface. The frontend was built using React 18 and Vite, combined with Tailwind CSS to ensure consistent, efficient styling and responsiveness across all devices.

      The project includes a robust user authentication system with role-based access for venue managers, allowing users to register, log in, and manage personal profiles and listings. Venue managers can create and edit listings, upload image galleries, specify amenities, and manage availability. The booking system features an interactive calendar, real-time availability checks, and booking confirmations.

      State management was handled using React Context and custom hooks, while TanStack Query provided efficient data fetching and caching. Forms were built with React Hook Form and validated using Yup, ensuring both usability and data integrity. Throughout development, accessibility was a key focus, and all pages were built with responsive design and WCAG compliance in mind.

      Among the key challenges were creating a flexible calendar component, managing venue image uploads, and building a scalable validation system for forms. Each was solved with custom components and reusable logic that improved performance and maintainability.

      Holidaze was also optimized for performance, with code splitting, lazy loading, and efficient image handling strategies. This project sharpened my skills in component-based architecture, user experience design, and frontend performance tuning. Looking ahead, I plan to expand Holidaze with payment integration, advanced search filters, and real-time updates to further enhance its capabilities.
      `}
    />
  );
};

export default Holidaze;
