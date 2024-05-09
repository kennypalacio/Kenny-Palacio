'use client'

import React from "react";
import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed
  } from "react-icons/rx";
  
const Ref: React.FC = () => {
  return (

  <div className="w-full h-full bg-transparent text-gray-200 p-[100px] z-[20]">
    <div className="w-full flex flex-col items-center justify-center m-auto">
    <div className="w-auto h-auto flex flex-row items-center justify-around">

    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
      <a
        href= "https://github.com/kennypalacio/KennyPalacio.github.io.git"
        className="flex flex-row text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RxGithubLogo/>
        <span className="text-[15px] ml-[6px]">Github</span>   
      </a>
    </div>
      <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
      <a
        href= "https://linkedin.com/in/kennypalacio"
        className="flex flex-row text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RxLinkedinLogo/>
        <span className="text-[15px] ml-[6px]">Linkedin</span> 
      </a>
    </div>

    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
      <a
        href="mailto:kennypalacio22@gmail.com"
        className="flex flex-row text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RxEnvelopeClosed/>
        <span className="text-[15px] ml-[6px]">Email</span> 
      </a>
      </div>

     </div>

    </div>
  </div>
    
  );
};

export default Ref;