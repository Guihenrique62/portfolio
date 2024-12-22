import React from 'react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return(
    <button
    type="button"
    className="bg-slate-300 hover:bg-slate-100 text-black py-2 px-4 rounded-full"
    >
      {children}
    </button>

  )
}

