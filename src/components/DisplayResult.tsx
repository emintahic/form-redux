import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { selectCounter, selectCurrentStep } from "../features/MultistepSlice";

function DisplayResult() {
  const forms = useSelector((state: RootState) => state.forms.forms);
  const counterRaw = useSelector(selectCounter);
  const counter = counterRaw - 1;
  return (
    <div>
      <div className="grid grid-cols-3 grid-row-2 gap-10">
        {/* Ovo sam uradio bez map funkcije jer nema potrebe za njom ako je jedna forma moguca... Tako da sam jednostavno displayo posljednju formu :) */}
        <div className="col-span-1 justify-start  rounded-lg  drop-shadow-sm font-thin h-24">
          <dt className="text-lg capitalize text-emerald-300">
            Ime: {forms[counter].ime}
          </dt>
          <dt className="capitalize text-lg text-emerald-300">
            Prezime: {forms[counter].prezime}
          </dt>
          <dt className="text-sm mt-1 text-white">{forms[counter].email}</dt>
        </div>
        <div className="drop-shadow-sm rounded-lg  text-white font-thin text-lg  h-24">
          <dt>Adresa: {forms[counter].adresa}</dt>
          <dt>Grad: {forms[counter].grad}</dt>
          <dt>Država: {forms[counter].drzava}</dt>
        </div>
        <div className="col-span-3 flex flex-row gap-10 justify-between text-white font-thin">
          <dt className="">Datum rodjenja: {forms[counter].datumRodjenja}</dt>
          <dt>Telefon: {forms[counter].telefon}</dt>
        </div>
        {/* {forms.map((form) => {
          return (
            <div>
              <h1>Ime: {forms.ime}</h1>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default DisplayResult;
