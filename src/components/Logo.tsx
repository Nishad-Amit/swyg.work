import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-20 h-20" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <img
        src="/img/Star 1.png"
        alt="Star Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
