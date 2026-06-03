import React, { useState, useEffect } from "react";
import { OnboardingModel, type StepConfig } from "./models/OnboardingState";
import { MobileScreen } from "./components/MobileScreen";
import { BackgroundWatermark } from "./components/BackgroundWatermark";

const STEPS: StepConfig[] = [
  {
    stepNumber: 1,
    totalSteps: 8,
    title: "Welcome to SWYG.WORK",
    subtitle: "We're here to help you build a <break>hydration habit that actually sticks — just <break>smart reminders and real progress.",
    quote: "Let's be honest: we all <break>know hydration matters. <break> Now let's  actually do <break> something about it."
  },
  {
    stepNumber: 2,
    totalSteps: 8,
    title: "The Two Golden Rules",
    subtitle: "Good hydration isn't rocket science. It's <break> just two things:",
    blobs: [
      {
        number: 1,
        title: "Hit Your Daily Volume",
        text: "Drink enough to replace <break> what you lose. Simple math."
      },
      {
        number: 2,
        title: "Spread It Out",
        text: "Chugging a liter in one go? <break>Your body can't process that.Sip <break>consistently throughout the day <break>instead."
      }
    ]
  },
  {
    stepNumber: 3,
    totalSteps: 8,
    title: "Your New<break>Hydration Buddy",
    subtitle: "SWYG sends you smart reminders<break>and makes tracking ridiculously easy."
  },
  {
    stepNumber: 4,
    totalSteps: 8,
    title: "Let's get to know you 👋",
    subtitle: ""
  },
  {
    stepNumber: 5,
    totalSteps: 8,
    title: "Your Water Habits",
    subtitle: ""
  },
  {
    stepNumber: 6,
    totalSteps: 8,
    title: "Track My Water Intake",
    subtitle: "Personalize your hydration rhythm <break> to match your daily lifestyle."
  },
  {
    stepNumber: 7,
    totalSteps: 8,
    title: "Your Goal",
    subtitle: ""
  },
  {
    stepNumber: 8,
    totalSteps: 8,
    title: "Notifications",
    subtitle: ""
  }
];

export const App: React.FC = () => {
  const [model, setModel] = useState<OnboardingModel>(() => new OnboardingModel(STEPS));
  const [, setTick] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        const scaleX = window.innerWidth / 390;
        const scaleY = window.innerHeight / 852;
        setScale(Math.min(scaleX, scaleY));
      } else {
        const scaleX = window.innerWidth / 1440;
        const scaleY = window.innerHeight / 1024;
        setScale(Math.min(scaleX, scaleY));
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (model.isLastStep()) {
      setModel(new OnboardingModel(STEPS));
    } else {
      model.nextStep();
    }
    setTick(prev => prev + 1);
  };

  const handlePrev = () => {
    model.prevStep();
    setTick(prev => prev + 1);
  };

  if (isMobile) {
    return (
      <div className="relative w-screen h-screen bg-[#F8F3EC] overflow-hidden flex items-center justify-center">
        <div
          className="relative flex-shrink-0"
          style={{
            width: "390px",
            height: "852px",
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <MobileScreen model={model} onNext={handleNext} onBack={handlePrev} isMobileLayout={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-[#ECDAFF] overflow-hidden flex items-center justify-center">
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{
          width: "1440px",
          height: "1024px",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <BackgroundWatermark />
        <MobileScreen model={model} onNext={handleNext} onBack={handlePrev} isMobileLayout={false} />
      </div>
    </div>
  );
};

export default App;
