import useMultistep from "../hooks/useMultistep";
import { useSelector } from "react-redux";
import { selectStep, selectAllSteps } from "../features/MultistepSlice";

function FormTitle(currentStep: any) {
  const allSteps = useSelector(selectAllSteps);
  const step = useSelector(selectStep);
  console.log(step);
  return (
    <div>
      <div className="text-gray-300 font-thin text-xs">
        Korak {currentStep.currentStep + 1} / {allSteps.length}
      </div>
      <div className="font-bold text-white text-xl">{step.text}</div>
      {currentStep.currentStep === 3 ? (
        <div className="text-gray-300 text-sm">
          Eh dosta te bilo, samo nam jos nisi maticni broj napisao...
        </div>
      ) : (
        <div className="text-gray-300 text-sm">
          Informacije koje upišete koristit će za vašu identifikaciju
        </div>
      )}
      <div className="h-[0.5px] w-full bg-gray-700/50 mt-3"></div>
    </div>
  );
}

export default FormTitle;
