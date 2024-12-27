import React from 'react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return(
    <button
    type="button"
    className="bg-slate-300 hover:bg-black hover:text-white text-black rounded-full justify-center items-center transition-colors duration-300 flex
    py-2 px-4 h-14 w-full gap-2 
    lg:h-10 lg:w-48
    md:h-10 md:w-48
    sm:h-10 sm:w-48
    "
    style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {children}
    </button>

  )
}

