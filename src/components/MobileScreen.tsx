import React from "react";
import { OnboardingModel } from "../models/OnboardingState";
import { Logo } from "./Logo";

interface MobileScreenProps {
  model: OnboardingModel;
  onNext: () => void;
  isMobileLayout?: boolean;
}

export const MobileScreen: React.FC<MobileScreenProps> = ({ model, onNext, isMobileLayout = false }) => {
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
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index + 1 === currentStepNum
                  ? "bg-[#9031F1] scale-110"
                  : "bg-[#E6DFD5]"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute flex flex-col items-center justify-between px-6 pt-10 pb-8"
        style={mainStyle}
      >
        <div className="flex flex-col items-center text-center mt-4 w-full">
          <Logo className="w-20 h-20 mb-8" />

          <h1 className="font-fustat font-bold text-[30px] leading-[37.5px] text-[#2E0064] tracking-[-0.75px] mb-4 max-w-[280px]">
            Welcome to
            <span className="block mt-1">SWYG.WORK</span>
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

        <div className="relative w-full max-w-[300px] aspect-[1.1] flex items-center justify-center my-4">
          <div
            className="absolute inset-0 bg-[#ECDAFF] opacity-60"
            style={{
              borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
            }}
          />
          <p className="relative z-10 px-8 text-center text-[16px] font-normal text-[#2E0064] leading-[1.2] tracking-normal font-fustat">
            {currentStep.quote.includes("<break>") ? (
              currentStep.quote.split("<break>").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < currentStep.quote.split("<break>").length - 1 && <br />}
                </React.Fragment>
              ))
            ) : (
              currentStep.quote
            )}
          </p>
        </div>
      </div>

      <div
        className="absolute flex items-center justify-center px-4"
        style={footerStyle}
      >
        <button
          onClick={onNext}
          className="w-full max-w-[358px] h-[52px] bg-[#9031F1] text-white font-bold text-[16px] rounded-[32px] border-2 border-black active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-100"
          style={{
            boxShadow: "4px 4px 0px 0px #000000",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
