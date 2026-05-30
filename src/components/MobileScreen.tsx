import React from "react";
import { motion } from "framer-motion";
import { OnboardingModel } from "../models/OnboardingState";
import { Logo } from "./Logo";

interface MobileScreenProps {
  model: OnboardingModel;
  onNext: () => void;
  onBack?: () => void;
  isMobileLayout?: boolean;
}

export const MobileScreen: React.FC<MobileScreenProps> = ({
  model,
  onNext,
  onBack,
  isMobileLayout = false,
}) => {
  const currentStep = model.getCurrentStep();
  const currentStepNum = model.getCurrentStepNumber();
  const totalSteps = model.getTotalSteps();

  const containerStyle = isMobileLayout
    ? {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        backgroundColor: "#F8F3EC",
        boxShadow: "none",
      }
    : {
        width: "390px",
        height: "852px",
        borderRadius: "24px",
        backgroundColor: "#F8F3EC",
        boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.1)",
      };

  const headerStyle = isMobileLayout
    ? {
        width: "100%",
        height: "77px",
        top: "0px",
        left: "0px",
      }
    : {
        width: "374px",
        height: "77px",
        top: "0px",
        left: "8px",
      };

  const mainStyle = isMobileLayout
    ? {
        width: "calc(100vw - 16px)",
        height: "calc(100vh - 176px)",
        top: "76px",
        left: "8px",
        borderRadius: "16px",
        backgroundColor: "#FAF6F0",
      }
    : {
        width: "373px",
        height: "700px",
        top: "76px",
        left: "8px",
        borderRadius: "16px",
        backgroundColor: "#FAF6F0",
      };

  const footerStyle = isMobileLayout
    ? {
        width: "100%",
        height: "52px",
        bottom: "24px",
        left: "0px",
      }
    : {
        width: "390px",
        height: "52px",
        bottom: "24px",
        left: "0px",
      };

  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden"
      style={containerStyle}
    >
      <div
        className="absolute flex flex-col items-center justify-center"
        style={headerStyle}
      >
        <span className="text-[12px] font-bold text-[#2E0064] tracking-wide mb-2">
          Step {currentStepNum} of {totalSteps}
        </span>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index + 1 === currentStepNum
                  ? "bg-[#9031F1] w-6"
                  : "bg-[#E6DFD5] w-2"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute flex flex-col items-center px-6 pt-4 pb-8 overflow-hidden"
        style={mainStyle}
      >
        <div className="flex flex-col items-center text-center mt-0 w-full">
          <Logo className="w-20 h-20 mb-2" />

          <h1 className="font-fustat font-bold text-[30px] leading-[37.5px] text-[#2E0064] tracking-[-0.75px] mb-4 max-w-[280px]">
            {currentStep.title.includes("<break>") ? (
              currentStep.title.split("<break>").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < currentStep.title.split("<break>").length - 1 && <br />}
                </React.Fragment>
              ))
            ) : (
              currentStep.title
            )}
          </h1>

          <p className="text-[16px] text-[#5C5464] leading-[22px] max-w-[320px] px-2 font-normal font-fustat tracking-normal">
            {currentStep.subtitle.includes("<break>") ? (
              currentStep.subtitle.split("<break>").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < currentStep.subtitle.split("<break>").length - 1 && <br />}
                </React.Fragment>
              ))
            ) : (
              currentStep.subtitle
            )}
          </p>
        </div>

        {currentStep.blobs ? (
          <div className="absolute inset-0 top-[275px] w-full h-[380px] pointer-events-auto">
            {currentStep.blobs.map((blob) => {
              const isFirst = blob.number === 1;
              const blobStyle = isFirst
                ? {
                    width: "200px",
                    height: "200px",
                    left: "12px",
                    top: "0px",
                    borderRadius: "45% 55% 70% 30% / 45% 45% 55% 55%",
                  }
                : {
                    width: "200px",
                    height: "200px",
                    right: "12px",
                    top: "140px",
                    borderRadius: "55% 45% 30% 70% / 55% 55% 45% 45%",
                  };

              return (
                <div
                  key={blob.number}
                  style={blobStyle}
                  className="absolute p-4 flex flex-col items-center justify-center text-center backdrop-blur-[1px]"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#ECDAFF]/50"
                    style={{ borderRadius: blobStyle.borderRadius }}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 25,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10 w-9 h-9 bg-[#9031F1] text-white flex items-center justify-center rounded-full font-bold text-[16px] mb-2 shadow-sm">
                    {blob.number}
                  </div>
                  <h3 className="relative z-10 font-fustat font-bold text-[14px] text-[#2E0064] mb-1 leading-tight">
                    {blob.title}
                  </h3>
                  <p className="relative z-10 font-fustat font-normal text-[10.5px] text-[#5C5464] leading-[1.3] max-w-[170px]">
                    {blob.text.includes("<break>") ? (
                      blob.text.split("<break>").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < blob.text.split("<break>").length - 1 && <br />}
                        </React.Fragment>
                      ))
                    ) : (
                      blob.text
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          (() => {
            const quote = currentStep.quote;
            if (!quote) return null;
            return (
              <div className="relative w-full max-w-[300px] aspect-[1.1] flex items-center justify-center my-4">
                <motion.div
                  className="absolute inset-0 bg-[#ECDAFF] opacity-60"
                  style={{
                    borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 35,
                    ease: "linear",
                  }}
                />
                <p className="relative z-10 px-8 text-center text-[16px] font-normal text-[#2E0064] leading-[1.2] tracking-normal font-fustat">
                  {quote.includes("<break>") ? (
                    quote.split("<break>").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < quote.split("<break>").length - 1 && <br />}
                      </React.Fragment>
                    ))
                  ) : (
                    quote
                  )}
                </p>
              </div>
            );
          })()
        )}
      </div>

      <div
        className="absolute flex items-center justify-end gap-16 pr-6 pl-4"
        style={footerStyle}
      >
        {onBack && currentStepNum > 1 ? (
          <>
            <button
              onClick={onBack}
              className="text-[#5C5464] hover:text-[#2E0064] font-bold text-[16px] flex items-center gap-1 font-fustat cursor-pointer transition-all duration-150 active:translate-x-[-2px]"
            >
              &lt; Back
            </button>
            <button
              onClick={onNext}
              className="w-[180px] h-[52px] bg-[#9031F1] text-white font-bold text-[16px] rounded-[32px] border-2 border-black active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-100"
              style={{
                boxShadow: "4px 4px 0px 0px #000000",
              }}
            >
              Next
            </button>
          </>
        ) : (
          <button
            onClick={onNext}
            className="w-full h-[52px] bg-[#9031F1] text-white font-bold text-[16px] rounded-[32px] border-2 border-black active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-100"
            style={{
              boxShadow: "4px 4px 0px 0px #000000",
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
