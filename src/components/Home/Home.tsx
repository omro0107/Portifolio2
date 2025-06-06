import ProjectCard from '../ProjectCard/ProjectCard';

const Home = () => {
  const projects = [
    {
      title: "Vaultbid",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imageUrl: "/images/VaultBid.png",
      link: "/projects/vaultbid"
    },
    {
      title: "Swiftcart",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imageUrl: "/images/SwiftCart.png",
      link: "/projects/swiftcart"
    },
    {
      title: "Holidaze",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imageUrl: "/images/Holidaze.png",
      link: "/projects/holidaze"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
        <h1 className="text-white font-cormorant uppercase text-center mb-16 whitespace-nowrap" style={{ fontSize: 'clamp(2rem, 9vw, 6.5rem)', letterSpacing: 'clamp(0.1em, 0.7vw, 0.3em)' }}>
          Oda Rosenkilde
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
