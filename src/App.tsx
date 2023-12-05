import { Form, addForm } from "./features/FormSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DisplayResult from "./components/DisplayResult";
import useMultistep from "./hooks/useMultistep";

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
    <dt>Unesi sljedeće:</dt>,
    <dt>Odakle si?</dt>,
    <dt>Još samo ovo</dt>,
    <dt> Ove podatke si nam dao:</dt>,
  ]);

  return (
    <>
      <div className="relative bg-white rounded-3xl mt-20 p-10 w-[50%] mx-auto h-72 drop-shadow-md ">
        <form
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
          <div className="absolute top-10 right-10 text-emerald-600 font-bold text-xl">
            {currentStep + 1} / {steps.length}
          </div>
          <div className="font-bold text-emerald-600 text-xl">{step}</div>
          <div>
            {currentStep === 0 ? (
              <div className="flex flex-col  gap-3 w-36 mt-2">
                <input
                  className="outline-none border-none bg-gray-50 rounded-md p-1"
                  placeholder="Ime"
                  required
                  value={newIme}
                  onChange={(e) => {
                    setNewIme(e.target.value);
                  }}
                  type="text"
                />
                <input
                  className="outline-none border-none bg-gray-50 rounded-md p-1"
                  placeholder="Prezime"
                  required
                  value={newPrezime}
                  onChange={(e) => {
                    setNewPrezime(e.target.value);
                  }}
                  type="text"
                />
                <input
                  className="outline-none border-none bg-gray-50 rounded-md p-1"
                  placeholder="Email"
                  required
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  value={newEmail}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                  type="text"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {currentStep === 1 ? (
            <div className="flex flex-col  gap-3 w-36 mt-2">
              <input
                className="outline-none border-none bg-gray-50 rounded-md p-1"
                placeholder="Adresa"
                required
                value={newAdresa}
                onChange={(e) => {
                  setNewAdresa(e.target.value);
                }}
                type="text"
              />
              <input
                className="outline-none border-none bg-gray-50 rounded-md p-1"
                placeholder="Grad"
                required
                value={newGrad}
                onChange={(e) => {
                  setNewGrad(e.target.value);
                }}
                type="text"
              />
              <input
                className="outline-none border-none bg-gray-50 rounded-md p-1"
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
            <div className="flex flex-col  gap-3 w-36 mt-2">
              <input
                className="outline-none border-none bg-gray-50 rounded-md p-1"
                placeholder="Datum rođenja"
                required
                value={newDatumRodjenja}
                onChange={(e) => {
                  setNewDatumRodjenja(e.target.value);
                }}
                type="date"
              />
              <input
                className="outline-none border-none bg-gray-50 rounded-md p-1"
                placeholder="Telefon"
                required
                value={newTelefon}
                onChange={(e) => {
                  setNewTelefon(e.target.value);
                }}
                type="tel"
                pattern="[0-9]{9}"
              />
            </div>
          ) : (
            ""
          )}

          <div className="mt-4 flex flex-row gap-5 justify-end">
            {currentStep > 0 && currentStep < 3 ? (
              <button
                type="button"
                onClick={back}
                className="py-1 px-4 text-white bg-emerald-400 rounded-2xl drop-shadow-md"
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
        </form>
      </div>

      <div></div>
    </>
  );
}

export default App;
