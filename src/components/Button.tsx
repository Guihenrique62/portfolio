import React from 'react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return(
    <button
    type="button"
    className="bg-slate-300 hover:bg-black hover:text-white text-black py-2 px-4 rounded-full h-10 w-36 transition-colors duration-300"
    >
      {children}
    </button>

  )
}

