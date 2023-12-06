import { Form, addForm } from "./features/FormSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DisplayResult from "./components/DisplayResult";
import useMultistep from "./hooks/useMultistep";
import Sidebar from "./components/Sidebar";

function App() {
  const [newIme, setNewIme] = useState("");
  const [newPrezime, setNewPrezime] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAdresa, setNewAdresa] = useState("");
  const [newGrad, setNewGrad] = useState("");
  const [newDrzava, setNewDrzava] = useState("");
  const [newDatumRodjenja, setNewDatumRodjenja] = useState("");
  const [newTelefon, setNewTelefon] = useState("");

  const dispatch = useDispatch();

  const handleSubmitForm = () => {
    const newForm: Form = {
      ime: newIme,
      prezime: newPrezime,
      email: newEmail,
      adresa: newAdresa,
      grad: newGrad,
      drzava: newDrzava,
      datumRodjenja: newDatumRodjenja,
      telefon: newTelefon,
    };

    dispatch(addForm(newForm));
  };

  const { steps, currentStep, step, back, next } = useMultistep([
    <dt>Unesi lične podatke</dt>,
    <dt>Mjesto boravka</dt>,
    <dt>Ostale informacije</dt>,
    <dt>Kraj</dt>,
  ]);

  return (
    <>
      <div className="relative bg-[#02044a]  rounded-xl mt-10 p-20 w-[70%] mx-auto max-h-[520px] drop-shadow-md ">
        <form
          className="grid grid-cols-4 grid-rows-5 h-[440px]"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitForm();
            // setNewIme("");
            // setNewPrezime("");
            // setNewEmail("");
            // setNewAdresa("");
            // setNewGrad("");
            // setNewDrzava("");
            // setNewDatumRodjenja("");
            // setNewTelefon(0);
            next();
          }}
        >
          <div className="col-span-4">
            <div className="font-bold text-white text-xl">Multi-step Forma</div>
            <dt className="font-light text-white">
              Ova Multi-step forma koristi Redux
            </dt>
            <div className="h-[0.5px] w-full bg-gray-700/50 mt-5"></div>
          </div>
          <Sidebar currentStep={currentStep} steps={steps} />
          <div className="col-start-2 col-span-3 row-start-2 row-span-4 ml-5 p-4">
            <div className="text-gray-300 font-thin text-xs">
              Korak {currentStep + 1} / {steps.length}
            </div>
            <div className="font-bold text-white text-xl">{step}</div>
            <div className="text-gray-300 text-sm">
              Informacije koje upišete koristit će za vašu identifikaciju
            </div>
            <div className="h-[0.5px] w-full bg-gray-700/50 mt-3"></div>

            <div className="w-full">
              {currentStep === 0 ? (
                <div className="flex flex-col  gap-3 w-full pt-7 mx-auto">
                  <input
                    className="outline-none  bg-[#02044a]   text-white placeholder-white ring-1 ring-emerald-300 focus:ring-emerald-400  rounded-md p-1"
                    placeholder="Ime"
                    required
                    value={newIme}
                    onChange={(e) => {
                      setNewIme(e.target.value);
                    }}
                    type="text"
                  />
                  <input
                    className="outline-none  bg-[#02044a]   text-white placeholder-white ring-1 ring-emerald-300 focus:ring-emerald-400  rounded-md p-1"
                    placeholder="Prezime"
                    required
                    value={newPrezime}
                    onChange={(e) => {
                      setNewPrezime(e.target.value);
                    }}
                    type="text"
                  />
                  <div className="flex flex-col">
                    <input
                      name="email"
                      className="outline-none  bg-[#02044a]   text-white placeholder-white ring-1 ring-emerald-300 focus:ring-emerald-400  rounded-md p-1"
                      placeholder="Email"
                      required
                      autoComplete="off"
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      value={newEmail}
                      onChange={(e) => {
                        setNewEmail(e.target.value);
                      }}
                      type="text"
                    />
                    <label htmlFor="email" className="text-xs text-gray-400">
                      hamopipa@nekimail.nesto
                    </label>
                  </div>
                </div>
              ) : (
                ""
              )}

              {currentStep === 1 ? (
                <div className="flex flex-col  gap-3 w-full pt-7 mx-auto">
                  <input
                    className="outline-none  bg-[#02044a]   text-white placeholder-white ring-1 ring-emerald-300 focus:ring-emerald-400  rounded-md p-1"
                    placeholder="Adresa"
                    required
                    value={newAdresa}
                    onChange={(e) => {
                      setNewAdresa(e.target.value);
                    }}
                    type="text"
                  />
                  <input
                    className="outline-none  bg-[#02044a]   text-white placeholder-white ring-1 ring-emerald-300 focus:ring-emerald-400  rounded-md p-1"
                    placeholder="Grad"
                    required
                    value={newGrad}
                    onChange={(e) => {
                      setNewGrad(e.target.value);
                    }}
                    type="text"
                  />
                  <input
                    className="outline-none  bg-[#02044a]   text-white placeholder-white ring-1 ring-emerald-300 focus:ring-emerald-400  rounded-md p-1"
                    placeholder="Država"
                    required
                    value={newDrzava}
                    onChange={(e) => {
                      setNewDrzava(e.target.value);
                    }}
                    type="text"
                  />
                </div>
              ) : (
                ""
              )}
              {currentStep === 2 ? (
                <div className="flex flex-col  gap-3 w-full pt-7 mx-auto">
                  <input
                    // className="outline-none border-none bg-gray-50 rounded-md p-1"
                    className="outline-none  bg-[#02044a]   text-white placeholder-white ring-1 ring-emerald-300 focus:ring-emerald-400  rounded-md p-1"
                    placeholder="Datum rođenja"
                    required
                    value={newDatumRodjenja}
                    onChange={(e) => {
                      setNewDatumRodjenja(e.target.value);
                    }}
                    type="date"
                  />
                  <input
                    className="outline-none  bg-[#02044a]   text-white placeholder-white ring-1 ring-emerald-300 focus:ring-emerald-400  rounded-md p-1"
                    placeholder="Telefon"
                    required
                    value={newTelefon}
                    onChange={(e) => {
                      setNewTelefon(e.target.value);
                    }}
                    type="tel"
                    maxLength={10}
                    pattern="\b\d{9}\b|\b\d{10}\b"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4 flex flex-row gap-5 justify-end">
              {currentStep > 0 && currentStep < 3 ? (
                <button
                  type="button"
                  onClick={back}
                  className="py-1 px-4 text-emerald-700 bg-white rounded-2xl drop-shadow-md"
                >
                  Back
                </button>
              ) : (
                ""
              )}
              {currentStep < 3 ? (
                <button
                  type="submit"
                  className="py-1 px-4 text-white bg-emerald-500 rounded-2xl drop-shadow-md"
                >
                  Next
                </button>
              ) : (
                ""
              )}
            </div>

            {currentStep === 3 ? <DisplayResult /> : ""}

            {/* {currentStep === 2 ? <button onClick={next}>SUBMIT</button> : ""} */}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
