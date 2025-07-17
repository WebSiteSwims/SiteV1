import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ExpertiseCardProps {
  image: string;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between min-h-[160px]">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-4 text-right">
          <ExternalLink className="w-5 h-5 text-purple-500 hover:text-purple-700" />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
