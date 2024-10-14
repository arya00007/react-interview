import React, { useState } from "react";
import ItemDetails from "./ItemDetails";
import SupplierDetails from "./SupplierDetails";
import Table from "../Table/Table";

const options = ["Item", "Supplier"];


function SelectionBody() {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleCheckboxChange(option) {
    setSelectedOption(option);
  }
  return (
    <div className="w-[90%] ms-[5%] rounded-xl">
      <div className=" border-slate-800 flex items-center justify-center my-8  gap-5 px-2">
        {options.map((option, index) => {
          return (
            <div key={index} className="flex items-center">
              <input
                className="border-blue-500"
                type="checkbox"
                checked={selectedOption === option}
                onChange={() => handleCheckboxChange(option)}
              />

              <label className="ms-2 text-sm text-stone-500">{option}</label>
            </div>
          );
        })}
      </div>

      {selectedOption === "Item" ? <ItemDetails /> : <SupplierDetails />}
      <Table />
    </div>
  );
}

export default SelectionBody;
