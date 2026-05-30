import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-20 h-20" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_2px_0px_rgba(0,0,0,1)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 12 C55 12 58 19 62 21 C67 19 73 21 76 25 C79 29 77 36 80 40 C84 43 90 46 90 51 C90 56 84 59 80 62 C77 66 79 73 76 77 C73 81 67 83 62 81 C58 83 55 90 50 90 C45 90 42 83 38 81 C33 83 27 81 24 77 C21 73 23 66 20 62 C16 59 10 56 10 51 C10 46 16 43 20 40 C23 36 21 29 24 25 C27 21 33 19 38 21 C42 19 45 12 50 12 Z"
          fill="#D4F300"
          stroke="#2E0064"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
