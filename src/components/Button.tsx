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
    py-2 px-2 h-12 w-full gap-2
    lg:h-10 lg:w-48 lg:text-base
    md:h-10 md:w-48 md:text-base
    sm:h-10 sm:w-48 sm:text-base
    "
    style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {children}
    </button>

  )
}

