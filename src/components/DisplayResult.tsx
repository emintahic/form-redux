import { RootState } from "../store/store";
import { useSelector } from "react-redux";

function DisplayResult() {
  const forms = useSelector((state: RootState) => state.forms.forms);
  return (
    <div>
      <div className="grid grid-cols-3 grid-row-2 gap-10">
        {/* Ovo sam uradio bez map funkcije jer nema potrebe za njom ako je jedna forma moguca... Tako da sam jednostavno displayo posljednju formu :) */}
        <div className="col-span-1 justify-start bg-gray-100 rounded-lg p-2 drop-shadow-sm font-semibold h-24">
          <dt className="text-md capitalize text-emerald-600">
            Ime: {forms[2].ime}
          </dt>
          <dt className="capitalize text-emerald-600">
            Prezime: {forms[2].prezime}
          </dt>
          <dt className="text-sm mt-1 text-gray-800">
            Email: {forms[2].email}
          </dt>
        </div>
        <div className="bg-gray-100 drop-shadow-sm rounded-lg p-2 text-gray-800 font-medium text-sm  h-24 py-4">
          <dt>Adresa: {forms[2].adresa}</dt>
          <dt>Grad: {forms[2].grad}</dt>
          <dt>Država: {forms[2].drzava}</dt>
        </div>
        <div className="col-span-3 flex flex-row gap-10 justify-between text-gray-800 font-thin">
          <dt className="">Datum rodjenja: {forms[2].datumRodjenja}</dt>
          <dt>Telefon: {forms[2].telefon}</dt>
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
