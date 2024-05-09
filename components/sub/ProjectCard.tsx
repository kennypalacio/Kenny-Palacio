import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  name: string;
  url: string;

  
  
}

const ProjectCard = ({ src, title, name, url}: Props) => {
  return (
    <div className="z-[20]">

    <div className="text-[30px] font-semibold text-white text-center py-20">

    <a
        href= {url}
        target="_blank"
        rel="noopener noreferrer"
      >

      {name}

      </a>

    </div>

    
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
    <a
        href= {url}
        target="_blank"
        rel="noopener noreferrer"
        
      >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
    </a>
    </div>
    
    </div>
    
  );
};

export default ProjectCard;