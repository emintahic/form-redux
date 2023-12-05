import { useState } from "react";

function FormOne() {
  const [newIme, setNewIme] = useState("");
  const [newPrezime, setNewPrezime] = useState("");
  const [newEmail, setNewEmail] = useState("");
  return (
    <div className="mt-3 flex flex-col  gap-3 w-36">
      <form className="flex flex-col  gap-3 w-36">
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
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
          type="text"
        />
      </form>
    </div>
  );
}

export default FormOne;
