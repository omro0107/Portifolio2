import ProjectPage from '../components/ProjectPage/ProjectPage';

const Swiftcart = () => {
  return (
    <ProjectPage
      title="Swiftcart"
      description="SwiftCart is a full-featured e-commerce platform I developed using modern React technologies. The project demonstrates my ability to create complex, interactive web applications with a focus on user experience and modern development practices."
      imageUrl="/images/SwiftCart.jpg"
      imageCaption="Swiftcart - E-commerce Solution"
      liveLink="https://frameworks-e-com.netlify.app/"
      githubLink="https://github.com/omro0107/frameworks-ca-e-com/blob/main/README.md"
      content={`
        SwiftCart is a modern e-commerce application built using the latest features of React 19. Designed to deliver a fast and intuitive shopping experience, this project reflects my ability to design and develop a production-ready web store with a focus on responsiveness, performance, and clean architecture.

        The platform includes a dynamic product catalog sourced from the Noroff API, with search functionality and advanced filtering to help users discover items quickly. I implemented a persistent shopping cart using Zustand for efficient state management, ensuring real-time updates and a smooth user interface. The checkout process features a user-friendly flow with form validation, order confirmation, and a secure design.

        I used React Hook Form along with Yup to build responsive and accessible forms, ensuring robust error handling and a seamless user experience. Styled Components were chosen for styling to enable modular, maintainable, and scoped CSS across the application.

        One of the main architectural goals was to keep the project modular and scalable. The codebase is organized with clear folder structures, reusable UI components, and separate layers for state, API handling, and business logic. Performance optimizations such as lazy-loaded routes and optimized image loading were applied to ensure fast load times and smooth navigation.

        SwiftCart was also a great learning experience in managing global state efficiently, integrating APIs securely, and building a consistent design system. Future plans include adding user authentication, integrating new payment methods, and expanding the product filtering system to support larger catalogs and richer user experiences.
      `}
    />
  );
};

export default Swiftcart;
