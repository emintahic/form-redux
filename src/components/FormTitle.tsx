import useMultistep from "../hooks/useMultistep";

function FormTitle(currentStep: any) {
  const { step, steps } = useMultistep([
    <dt>Unesi lične podatke</dt>,
    <dt>Mjesto boravka</dt>,
    <dt>Ostale informacije</dt>,
    <dt>Kraj</dt>,
  ]);

  return (
    <div>
      <div className="text-gray-300 font-thin text-xs">
        Korak {currentStep.currentStep + 1} / {steps.length}
      </div>
      <div className="font-bold text-white text-xl">{step}</div>
      <div className="text-gray-300 text-sm">
        Informacije koje upišete koristit će za vašu identifikaciju
      </div>
      <div className="h-[0.5px] w-full bg-gray-700/50 mt-3"></div>
    </div>
  );
}

export default FormTitle;
