import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ title, description, imageUrl, link }: ProjectCardProps) => {
  return (
    <Link 
      to={link} 
      className="block bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl text-white font-cormorant mb-2">{title}</h2>
        <p className="text-gray-400 font-poppins text-sm leading-normal">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
