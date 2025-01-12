import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.png" 
        alt="BSEO Logo" 
        className="h-8 w-auto" 
      />
      <span className="text-2xl font-bold text-secondary">BSEO</span>
    </div>
  );
}
