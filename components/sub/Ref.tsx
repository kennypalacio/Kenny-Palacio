'use client'

import React from "react";
import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed
  } from "react-icons/rx";
  
const Ref: React.FC = () => {
  return (

  <div className="w-auto h-auto bg-transparent text-gray-200 p-[100px] z-[20]">
    <div className="w-auto flex flex-col justify-center m-auto">
    <div className="w-auto h-auto flex flex-row justify-around">
    <div className="w-auto h-auto flex flex-row space-x-11 justify-start ">
    <div className="w-auto h-auto flex flex-col items-center justify-start">
      <a
        href= "https://github.com/kennypalacio/KennyPalacio.github.io.git"
        className="flex flex-row text-center text-white items-center cursor-pointer rounded-lg "
        target="_blank"
        rel="noopener noreferrer"
      >
        <RxGithubLogo/>
        <span className="text-[15px] ml-[6px]">Github</span>   
      </a>
    </div>
      <div className="w-auto h-auto flex flex-col jitems-center ustify-start">
      <a
        href= "https://linkedin.com/in/kennypalacio"
        className="flex flex-row text-center text-white items-center cursor-pointer rounded-lg "
        target="_blank"
        rel="noopener noreferrer"
      >
        <RxLinkedinLogo/>
        <span className="text-[15px] ml-[6px]">Linkedin</span> 
      </a>
    </div>

    <div className=" h-auto flex flex-col items-center justify-start">
      <a
        href="mailto:kennypalacio22@gmail.com"
        className="flex flex-row text-center text-white items-center cursor-pointer rounded-lg "
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
  </div>
    
  );
};

export default Ref;