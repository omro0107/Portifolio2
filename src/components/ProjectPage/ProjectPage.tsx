import { useState } from 'react';

interface ProjectPageProps {
  title: string;
  description: string;
  imageUrl: string;
  imageCaption: string;
  liveLink: string;
  githubLink: string;
  content: string;
}

const ProjectPage = ({ 
  title, 
  description, 
  imageUrl, 
  imageCaption, 
  liveLink, 
  githubLink, 
  content 
}: ProjectPageProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-white font-cormorant text-5xl md:text-6xl uppercase mb-6 text-center">
          {title}
        </h1>
        <p className="text-gray-300 font-poppins text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          {description}
        </p>
        
        {/* Share/Copy Link */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors font-poppins"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copied ? 'Copied!' : 'Share Link'}
          </button>
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-12">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full aspect-[2/1] object-cover rounded-lg mb-4"
        />
        <p className="text-gray-400 font-poppins text-sm text-center italic">
          {imageCaption}
        </p>
      </div>

      {/* Action Links */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-lg font-poppins font-medium hover:bg-gray-200 transition-colors text-center"
        >
          View Live Site
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-white hover:text-black transition-colors text-center"
        >
          View on GitHub
        </a>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <div className="text-gray-300 font-poppins leading-relaxed space-y-6">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
