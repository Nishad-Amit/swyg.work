import React, { useState } from "react";
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

  // Step 4 Form State
  const [firstName, setFirstName] = useState("Chiranya");
  const [lastName, setLastName] = useState("Gupta");
  const [nickname, setNickname] = useState("hihi");
  const [avatarName, setAvatarName] = useState("CG");
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("Female");
  const [phoneNumber, setPhoneNumber] = useState("+1 234 567 8900");

  // Step 5 Water Habit State
  const [dailyWater, setDailyWater] = useState("1500");
  const [waterInterval, setWaterInterval] = useState(180);

  const containerStyle = isMobileLayout
    ? {
        width: "100%",
        height: "100%",
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
        width: "calc(100% - 16px)",
        height: "calc(100% - 176px)",
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
        bottom: "70px",
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
        {currentStepNum === 4 ? (
          <>
            <h1 
              className="absolute font-fustat font-bold text-[30px] leading-[37.5px] text-[#280056] tracking-[-0.75px] text-center whitespace-nowrap flex items-center justify-center"
              style={{
                width: "313px",
                height: "38px",
                top: "32px",
                left: "30px",
              }}
            >
              Let's get to know you 👋
            </h1>
            <div 
              className="absolute w-[313px] h-[554px] pointer-events-auto overflow-y-auto scrollbar-none flex flex-col gap-[18px] pb-[16px]"
              style={{ 
                top: "97px",
                left: "30px",
                msOverflowStyle: "none",
                scrollbarWidth: "none"
              }}
            >
              {/* First Name & Last Name */}
              <div className="flex gap-3 w-full">
                <div className="flex-1 flex flex-col text-left">
                  <label className="text-[12px] font-semibold text-[#5C5464] mb-[6px] font-fustat text-left pl-1">First Name *</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-[48px] px-5 rounded-full border border-[#E6DFD5] bg-white text-[#2E0064] font-fustat text-[15px] focus:outline-none focus:border-[#9031F1] transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col text-left">
                  <label className="text-[12px] font-semibold text-[#5C5464] mb-[6px] font-fustat text-left pl-1">Last Name *</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-[48px] px-5 rounded-full border border-[#E6DFD5] bg-white text-[#2E0064] font-fustat text-[15px] focus:outline-none focus:border-[#9031F1] transition-colors"
                  />
                </div>
              </div>

              {/* Nickname */}
              <div className="flex flex-col w-full text-left">
                <label className="text-[12px] font-semibold text-[#5C5464] mb-[6px] font-fustat text-left pl-1">Nickname *</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="w-full h-[48px] px-5 rounded-full border border-[#E6DFD5] bg-white text-[#2E0064] font-fustat text-[15px] focus:outline-none focus:border-[#9031F1] transition-colors"
                />
              </div>

              {/* Avatar Name */}
              <div className="flex flex-col w-full text-left">
                <label className="text-[12px] font-semibold text-[#5C5464] mb-[6px] font-fustat text-left pl-1">Avatar Name</label>
                <input
                  type="text"
                  value={avatarName}
                  onChange={(e) => setAvatarName(e.target.value)}
                  className="w-full h-[48px] px-5 rounded-full border border-[#E6DFD5] bg-white text-[#2E0064] font-fustat text-[15px] focus:outline-none focus:border-[#9031F1] transition-colors"
                />
              </div>

              {/* Avatar Badge Preview */}
              <div className="flex justify-center my-0.5">
                <div className="w-[60px] h-[60px] rounded-full bg-[#E5D9FA] flex items-center justify-center text-[#9031F1] font-bold text-[16px] font-fustat shadow-sm">
                  {avatarName || "CG"}
                </div>
              </div>

              {/* Age & Gender */}
              <div className="flex gap-3 w-full">
                <div className="flex-1 flex flex-col text-left">
                  <label className="text-[12px] font-semibold text-[#5C5464] mb-[6px] font-fustat text-left pl-1">Age</label>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full h-[48px] px-5 rounded-full border border-[#E6DFD5] bg-white text-[#2E0064] font-fustat text-[15px] focus:outline-none focus:border-[#9031F1] transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col relative text-left">
                  <label className="text-[12px] font-semibold text-[#5C5464] mb-[6px] font-fustat text-left pl-1">Gender</label>
                  <div className="relative">
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full h-[48px] pl-5 pr-10 rounded-full border border-[#E6DFD5] bg-white text-[#2E0064] font-fustat text-[15px] appearance-none focus:outline-none focus:border-[#9031F1] transition-colors cursor-pointer"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                      <svg className="w-5 h-5 text-[#5C5464]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col w-full text-left">
                <label className="text-[12px] font-semibold text-[#5C5464] mb-[6px] font-fustat text-left pl-1">Phone Number *</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full h-[48px] px-5 rounded-full border border-[#E6DFD5] bg-white text-[#2E0064] font-fustat text-[15px] focus:outline-none focus:border-[#9031F1] transition-colors"
                />
              </div>
            </div>
          </>
        ) : currentStepNum === 5 ? (
          <>
            <h1 
              className="absolute font-fustat font-bold text-[30px] leading-[37.5px] text-[#280056] tracking-[-0.75px] text-left"
              style={{
                width: "313px",
                height: "38px",
                top: "32px",
                left: "30px",
              }}
            >
              Your Water Habits
            </h1>
            <div 
              className="absolute w-[313px] h-[554px] pointer-events-auto flex flex-col gap-6 text-left"
              style={{ 
                top: "97px",
                left: "30px",
              }}
            >
              {/* Daily intake question */}
              <div className="flex flex-col w-full text-left">
                <label className="text-[15px] font-semibold text-[#4A4350] mb-2.5 font-fustat pl-1 leading-[21px]">
                  How much water do you typically <br /> drink per day?
                </label>
                <div className="relative w-full h-[50px]">
                  <input
                    type="text"
                    value={dailyWater}
                    onChange={(e) => setDailyWater(e.target.value)}
                    className="w-full h-full pl-6 pr-14 rounded-full border border-[#E6DFD5] bg-white text-[#280056] font-bold font-fustat text-[16px] focus:outline-none focus:border-[#9031F1] transition-colors"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#9A93A0] font-fustat text-[15px] font-semibold">
                    ml
                  </span>
                </div>
                <span className="text-[12px] text-[#9A93A0] font-fustat mt-1.5 pl-1">
                  Optional – Default: 1500ml
                </span>
              </div>

              {/* Frequency question */}
              <div className="flex flex-col w-full text-left mt-2">
                <label className="text-[15px] font-semibold text-[#4A4350] mb-3.5 font-fustat pl-1">
                  How often do you drink water?
                </label>
                
                <div className="flex flex-col gap-3 w-full">
                  {/* Row 1 */}
                  <div className="flex gap-2.5 justify-start w-full">
                    {[30, 60, 90].map((mins) => {
                      const isSelected = waterInterval === mins;
                      return (
                        <button
                          key={mins}
                          onClick={() => setWaterInterval(mins)}
                          className={`h-[44px] flex-1 max-w-[95px] rounded-full font-fustat text-[14px] font-bold transition-all duration-150 border cursor-pointer ${
                            isSelected
                              ? "bg-[#9031F1] text-white border-[#9031F1] shadow-[0px_4px_12px_rgba(144,49,241,0.3)] active:translate-y-0.5"
                              : "bg-white text-[#280056] border-[#E6DFD5] hover:bg-[#FAF6F0]/50 active:translate-y-0.5"
                          }`}
                        >
                          {mins} min
                        </button>
                      );
                    })}
                  </div>

                  {/* Row 2 */}
                  <div className="flex gap-2.5 justify-start w-full">
                    {[180, 240].map((mins) => {
                      const isSelected = waterInterval === mins;
                      return (
                        <button
                          key={mins}
                          onClick={() => setWaterInterval(mins)}
                          className={`h-[44px] flex-1 max-w-[95px] rounded-full font-fustat text-[14px] font-bold transition-all duration-150 border cursor-pointer ${
                            isSelected
                              ? "bg-[#9031F1] text-white border-[#9031F1] shadow-[0px_4px_12px_rgba(144,49,241,0.3)] active:translate-y-0.5"
                              : "bg-white text-[#280056] border-[#E6DFD5] hover:bg-[#FAF6F0]/50 active:translate-y-0.5"
                          }`}
                        >
                          {mins} min
                        </button>
                      );
                    })}
                  </div>
                </div>

                <span className="text-[12px] text-[#9A93A0] font-fustat mt-3.5 pl-1">
                  Optional – Default: 180 min
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center text-center mt-0 w-full">
              {currentStepNum === 3 ? (
                <img
                  src="/img/Union copy.png"
                  alt="SWWYG Logo"
                  className="h-[26px] object-contain mb-3"
                />
              ) : (
                <Logo className="w-20 h-20 mb-2" />
              )}

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

              {currentStepNum !== 4 && (
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
              )}
            </div>

            {currentStepNum === 3 ? (
              <div className="absolute inset-x-0 top-[245px] flex flex-col items-center w-full pointer-events-auto px-6">
                <div className="text-[17px] font-bold text-[#2E0064] mb-3.5 font-fustat tracking-normal">
                  Two ways to log:
                </div>
                
                <div className="flex gap-4 w-full justify-center">
                  {/* Card 1: Tap the Notification */}
                  <div className="relative flex-1 max-w-[152px] h-[345px] rounded-[16px] border-2 border-dashed border-[#B097FF] bg-[#F2EEFF] flex flex-col justify-end items-center pb-8">
                    <img
                      src="/img/Star 1.png"
                      alt="Star"
                      className="absolute top-4 left-4 w-10 h-10 object-contain"
                    />
                    <img
                      src="/img/Star 1.png"
                      alt="Star Small"
                      className="absolute bottom-[110px] right-3.5 w-[20px] h-[20px] object-contain"
                    />
                    <div className="text-center px-1">
                      <div
                        style={{
                          fontFamily: "'Big Shoulders Display', sans-serif",
                          fontWeight: 800,
                          fontSize: "25px",
                          lineHeight: "28px",
                          letterSpacing: "0px",
                          textAlign: "center",
                          textTransform: "uppercase",
                          color: "#121212"
                        }}
                      >
                        TAP THE
                        <br />
                        NOTIFICATION
                      </div>
                      <div
                        style={{
                          fontFamily: "'Fustat', sans-serif",
                          fontWeight: 400,
                          fontSize: "12px",
                          lineHeight: "14px",
                          letterSpacing: "-0.2px",
                          color: "#5A5B60",
                          marginTop: "6px"
                        }}
                      >
                        (easiest)
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Open the App */}
                  <div className="relative flex-1 max-w-[152px] h-[345px] rounded-[16px] border-2 border-dashed border-[#B097FF] bg-[#F2EEFF] flex flex-col justify-end items-center pb-8">
                    <img
                      src="/img/Star 1.png"
                      alt="Star Small"
                      className="absolute bottom-[66px] left-3.5 w-[20px] h-[20px] object-contain"
                    />
                    <img
                      src="/img/Star 1.png"
                      alt="Star"
                      className="absolute top-[160px] right-3.5 w-9 h-9 object-contain"
                    />
                    <div className="text-center px-1">
                      <div
                        style={{
                          fontFamily: "'Big Shoulders Display', sans-serif",
                          fontWeight: 800,
                          fontSize: "25px",
                          lineHeight: "28px",
                          letterSpacing: "0px",
                          textAlign: "center",
                          textTransform: "uppercase",
                          color: "#121212"
                        }}
                      >
                        OPEN
                        <br />
                        THE APP
                      </div>
                      <div
                        style={{
                          fontFamily: "'Fustat', sans-serif",
                          fontWeight: 400,
                          fontSize: "12px",
                          lineHeight: "14px",
                          letterSpacing: "-0.2px",
                          color: "#5A5B60",
                          marginTop: "6px"
                        }}
                      >
                        (hit the logo)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentStep.blobs ? (
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
      </>
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
