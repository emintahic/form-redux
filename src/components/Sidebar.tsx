import useMultistep from "../hooks/useMultistep";

function Sidebar(currentStep: any) {
  const { steps } = useMultistep([
    <dt>Unesi lične podatke</dt>,
    <dt>Mjesto boravka</dt>,
    <dt>Ostale informacije</dt>,
    <dt>Kraj</dt>,
  ]);

  return (
    <div>
      <div className="col-span-1 row-start-2 row-span-4 ">
        <div className="flex flex-col">
          {steps.map((step) => {
            console.log(steps[currentStep.currentStep]);
            return (
              <div className="text-white/70 flex flex-row gap-4 h-16 justify-between">
                {step === steps[currentStep.currentStep] ? (
                  <dt className="text-white">{step}</dt>
                ) : (
                  <dt className="text-gray-500">{step}</dt>
                )}
                {/* <div className="w-[0.5px] h-fit bg-gray-100/50"> */}

                {step === steps[currentStep.currentStep] ? (
                  <div className="bg-emerald-300 rounded-full w-6 h-6 text-black"></div>
                ) : (
                  <div className="bg-gray-400 rounded-full w-6 h-6 text-black"></div>
                )}
              </div>
              // </div>
            );
          })}
        </div>
        <div className="w-[0.5px] h-72 bg-gray-500/50 absolute left-[252px] top-44 -z-10"></div>
      </div>
    </div>
  );
}

export default Sidebar;
