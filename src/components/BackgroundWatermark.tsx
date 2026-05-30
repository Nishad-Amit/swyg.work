import React from "react";

export const BackgroundWatermark: React.FC = () => {
  return (
    <div
      className="absolute pointer-events-none select-none flex items-center justify-center"
      style={{
        width: "1800px",
        height: "512px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        src="/img/Union.png"
        alt="SWWYG Watermark"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
