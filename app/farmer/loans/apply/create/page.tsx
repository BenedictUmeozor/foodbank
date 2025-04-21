"use client";

import LoanFarmDetails from "@/components/ui/LoanFarmDetails";
import LoanPersonalInformation from "@/components/ui/LoanPersonalInformation";
import { useCallback, useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);

  const handleNextStep = useCallback((step: number) => setStep(step), []);

  if (step === 1) {
    return <LoanPersonalInformation handleStepChange={handleNextStep} />;
  }

  if (step === 2) {
    return <LoanFarmDetails handleStepChange={handleNextStep} />;
  }

  return <div>Page</div>;
}
