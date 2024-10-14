import React, { useState, useEffect } from "react";

function ItemDetails() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemUnitPrice, setItemUnitPrice] = useState("");
  const [itemDate, setItemDate] = useState("");

  // State variables for validation
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // State variables to track if fields have been touched
  const [touched, setTouched] = useState({
    itemName: false,
    itemQuantity: false,
    itemUnitPrice: false,
    itemDate: false,
  });

  // Effect to validate form whenever input values or touched state changes
  useEffect(() => {
    validateForm();
  }, [itemName, itemQuantity, itemUnitPrice, itemDate, touched]);

  const validateForm = () => {
    const newErrors = {};

    // Validate Item Name
    if (touched.itemName) {
      if (!itemName.trim()) {
        newErrors.itemName = "Item Name is required.";
      } else if (itemName.length > 50) {
        newErrors.itemName = "Item Name cannot exceed 50 characters.";
      }
    }

    // Validate Quantity
    if (touched.itemQuantity) {
      if (!itemQuantity.trim()) {
        newErrors.itemQuantity = "Quantity is required.";
      } else if (!/^\d+$/.test(itemQuantity)) {
        newErrors.itemQuantity = "Quantity must be a positive integer.";
      }
    }

    // Validate Unit Price
    if (touched.itemUnitPrice) {
      if (!itemUnitPrice.trim()) {
        newErrors.itemUnitPrice = "Unit Price is required.";
      } else if (!/^\d+(\.\d{1,2})?$/.test(itemUnitPrice)) {
        newErrors.itemUnitPrice = "Unit Price must be a valid number.";
      }
    }

    // Validate Date of Submission
    if (touched.itemDate) {
      if (!itemDate.trim()) {
        newErrors.itemDate = "Date of Submission is required.";
      } else if (isNaN(new Date(itemDate).getTime())) {
        newErrors.itemDate = "Invalid date format.";
      }
    }

    setErrors(newErrors);
    // Form is valid only if there are no errors and all fields are filled
    const allFieldsFilled =
      itemName &&
      itemQuantity &&
      itemUnitPrice &&
      itemDate &&
      Object.keys(newErrors).length === 0;
    setIsFormValid(allFieldsFilled);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched to trigger validation messages
    setTouched({
      itemName: true,
      itemQuantity: true,
      itemUnitPrice: true,
      itemDate: true,
    });

    // After setting touched, validateForm will run via useEffect
    // To ensure form submission happens after validation, use a timeout
    setTimeout(() => {
      if (isFormValid) {
        const formData = {
          itemName,
          itemQuantity,
          itemUnitPrice,
          itemDate,
        };
        console.log("Form Data Submitted:", formData);
        // TODO: Submit the data to the server here

        // Reset form fields and touched state
        setItemName("");
        setItemQuantity("");
        setItemUnitPrice("");
        setItemDate("");
        setTouched({
          itemName: false,
          itemQuantity: false,
          itemUnitPrice: false,
          itemDate: false,
        });
        setErrors({});
        setIsFormValid(false);
      }
    }, 0);
  };

  // Handle field blur to mark as touched
  const handleBlur = (field) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[80%] bg-[#EBEEFD] ms-[10%] rounded-2xl shadow-md gap-4 gap-y-10 px-6 grid grid-cols-2 grid-rows-2 mt-[100px] py-4">
        {/* Item Name Field */}
        <div className="flex flex-col w-[100%]">
          <label htmlFor="itemName" className="font-medium ms-1">
            Item Name
          </label>
          <input
            id="itemName"
            name="itemName"
            className={`w-[100%] rounded-md border ${
              errors.itemName ? "border-red-500" : "border-stone-300"
            } px-3 py-1.5 mt-1`}
            type="text"
            placeholder="Enter Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            onBlur={() => handleBlur("itemName")}
          />
          <p className="text-sm text-slate-400 mt-2 ms-1">Max 50 characters</p>
          {errors.itemName && (
            <p className="text-sm text-red-500 mt-1 ms-1">{errors.itemName}</p>
          )}
        </div>

        {/* Quantity Field */}
        <div className="flex flex-col w-[100%]">
          <label htmlFor="itemQuantity" className="font-medium ms-1">
            Quantity
          </label>
          <input
            id="itemQuantity"
            name="itemQuantity"
            className={`w-[100%] rounded-md border ${
              errors.itemQuantity ? "border-red-500" : "border-stone-300"
            } px-3 py-1.5 mt-1`}
            type="text"
            placeholder="Enter Quantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            onBlur={() => handleBlur("itemQuantity")}
          />
          <p className="text-sm text-slate-400 mt-2 ms-1">Enter quantity</p>
          {errors.itemQuantity && (
            <p className="text-sm text-red-500 mt-1 ms-1">
              {errors.itemQuantity}
            </p>
          )}
        </div>

        {/* Unit Price Field */}
        <div className="flex flex-col w-[100%]">
          <label htmlFor="itemUnitPrice" className="font-medium ms-1">
            Unit Price
          </label>
          <input
            id="itemUnitPrice"
            name="itemUnitPrice"
            className={`w-[100%] rounded-md border ${
              errors.itemUnitPrice ? "border-red-500" : "border-stone-300"
            } px-3 py-1.5 mt-1`}
            type="text"
            placeholder="Enter Unit Price (USD)"
            value={itemUnitPrice}
            onChange={(e) => setItemUnitPrice(e.target.value)}
            onBlur={() => handleBlur("itemUnitPrice")}
          />
          <p className="text-sm text-slate-400 mt-2 ms-1">
            Numeric value (USD)
          </p>
          {errors.itemUnitPrice && (
            <p className="text-sm text-red-500 mt-1 ms-1">
              {errors.itemUnitPrice}
            </p>
          )}
        </div>

        {/* Date of Submission Field */}
        <div className="flex flex-col w-[100%]">
          <label htmlFor="itemDate" className="font-medium ms-1">
            Date of Submission
          </label>
          <input
            id="itemDate"
            name="itemDate"
            className={`w-[100%] rounded-md border ${
              errors.itemDate ? "border-red-500" : "border-stone-300"
            } px-3 py-1.5 mt-1`}
            type="date"
            placeholder="Select date"
            value={itemDate}
            onChange={(e) => setItemDate(e.target.value)}
            onBlur={() => handleBlur("itemDate")}
          />
          <p className="text-sm text-slate-400 mt-2 ms-1">
            Format: MM/DD/YYYY
          </p>
          {errors.itemDate && (
            <p className="text-sm text-red-500 mt-1 ms-1">{errors.itemDate}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`px-6 py-2 rounded-md font-semibold ${
            isFormValid
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-700 cursor-not-allowed"
          }`}
        >
          Save Changes
        </button>
      </div>

      {/* Submitted Data Section */}
      <div className="mt-12 text-center">
        <p className="text-2xl font-bold">Submitted Data</p>
        <p>The data submitted by users will be displayed below.</p>
      </div>
    </form>
  );
}

export default ItemDetails;
