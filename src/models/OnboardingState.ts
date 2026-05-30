export interface StepConfig {
  stepNumber: number;
  totalSteps: number;
  title: string;
  subtitle: string;
  quote: string;
}

export class OnboardingModel {
  private steps: StepConfig[];
  private currentStepIndex: number;

  constructor(steps: StepConfig[], initialIndex: number = 0) {
    this.steps = steps;
    this.currentStepIndex = initialIndex;
  }

  public getCurrentStep(): StepConfig {
    return this.steps[this.currentStepIndex];
  }

  public nextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }

  public prevStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  public getProgressPercentage(): number {
    return ((this.currentStepIndex + 1) / this.steps.length) * 100;
  }

  public isLastStep(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  public getCurrentStepNumber(): number {
    return this.currentStepIndex + 1;
  }

  public getTotalSteps(): number {
    return this.steps.length;
  }
}
