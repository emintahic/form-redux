// import useMultistep from "../hooks/useMultistep";
import {
  selectCurrentStep,
  selectAllSteps,
  setIndex,
} from "../features/MultistepSlice";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const currentStep = useSelector(selectCurrentStep);
  // const step = useSelector(selectStep);
  const steps = useSelector(selectAllSteps);
  const dispatch = useDispatch();

  const handleSetIndex = (index: number) => {
    dispatch(setIndex({ index }));
  };

  return (
    <div>
      <div className="col-span-1 row-start-2 row-span-4 relative ">
        <div className="flex flex-col">
          {steps.map((step) => {
            return (
              <div className="text-white/70 flex flex-row gap-4 h-16 justify-between">
                {step === steps[currentStep] ? (
                  <dt className="text-white">{step.text}</dt>
                ) : (
                  <dt className="text-gray-500">{step.text}</dt>
                )}
                {/* <div className="w-[0.5px] h-fit bg-gray-100/50"> */}

                {step === steps[currentStep] ? (
                  <div className="bg-emerald-300 rounded-full w-6 h-6 text-black"></div>
                ) : step.index === 3 ? (
                  <button
                    type="submit"
                    key={step.index}
                    className="bg-gray-400 rounded-full w-6 h-6 text-black cursor-pointer"
                  ></button>
                ) : (
                  <button
                    type="button"
                    key={step.index}
                    className="bg-gray-400 rounded-full w-6 h-6 text-black cursor-pointer"
                    onClick={() => {
                      handleSetIndex(step.index);
                    }}
                  ></button>
                )}
              </div>
              // </div>
            );
          })}
        </div>
        <div className="w-[0.5px] h-72 bg-gray-500/50 absolute left-[172px] top-0 -z-10"></div>
      </div>
    </div>
  );
}

export default Sidebar;
