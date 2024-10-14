import React, { useState, useEffect } from "react";
// import SubmitButton from "./SubmitButton";

function SupplierDetails() {
  const [supplierName, setSupplierName] = useState("");
  const [supplierCompany, setSupplierCompany] = useState("");
  const [supplierCountry, setSupplierCountry] = useState("");
  const [supplierState, setSupplierState] = useState("");
  const [supplierCity, setSupplierCity] = useState("");
  const [supplierEmail, setSupplierEmail] = useState("");
  const [supplierPhone, setSupplierPhone] = useState("");

  const [supplierErrors, setSupplierErrors] = useState({});
  const [supplierTouched, setSupplierTouched] = useState({
    supplierName: false,
    supplierCompany: false,
    supplierCountry: false,
    supplierState: false,
    supplierCity: false,
    supplierEmail: false,
    supplierPhone: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const countryOptions = [
    { value: "", label: "Select Country" },
    { value: "USA", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "India", label: "India" },
  ];

  const stateOptions = {
    USA: [
      { value: "", label: "Select State" },
      { value: "California", label: "California" },
      { value: "New York", label: "New York" },
      { value: "Texas", label: "Texas" },
    ],
    Canada: [
      { value: "", label: "Select Province" },
      { value: "Ontario", label: "Ontario" },
      { value: "Quebec", label: "Quebec" },
      { value: "British Columbia", label: "British Columbia" },
    ],
    India: [
      { value: "", label: "Select State" },
      { value: "Maharashtra", label: "Maharashtra" },
      { value: "Karnataka", label: "Karnataka" },
      { value: "Delhi", label: "Delhi" },
    ],
  };

  const cityOptions = {
    California: [
      { value: "", label: "Select City" },
      { value: "Los Angeles", label: "Los Angeles" },
      { value: "San Francisco", label: "San Francisco" },
      { value: "San Diego", label: "San Diego" },
    ],
    "New York": [
      { value: "", label: "Select City" },
      { value: "New York City", label: "New York City" },
      { value: "Buffalo", label: "Buffalo" },
      { value: "Rochester", label: "Rochester" },
    ],
    Texas: [
      { value: "", label: "Select City" },
      { value: "Houston", label: "Houston" },
      { value: "Dallas", label: "Dallas" },
      { value: "Austin", label: "Austin" },
    ],
    Ontario: [
      { value: "", label: "Select City" },
      { value: "Toronto", label: "Toronto" },
      { value: "Ottawa", label: "Ottawa" },
      { value: "Hamilton", label: "Hamilton" },
    ],
    Quebec: [
      { value: "", label: "Select City" },
      { value: "Montreal", label: "Montreal" },
      { value: "Quebec City", label: "Quebec City" },
      { value: "Laval", label: "Laval" },
    ],
    "British Columbia": [
      { value: "", label: "Select City" },
      { value: "Vancouver", label: "Vancouver" },
      { value: "Victoria", label: "Victoria" },
      { value: "Richmond", label: "Richmond" },
    ],
    Maharashtra: [
      { value: "", label: "Select City" },
      { value: "Mumbai", label: "Mumbai" },
      { value: "Pune", label: "Pune" },
      { value: "Nagpur", label: "Nagpur" },
    ],
    Karnataka: [
      { value: "", label: "Select City" },
      { value: "Bangalore", label: "Bangalore" },
      { value: "Mysore", label: "Mysore" },
      { value: "Mangalore", label: "Mangalore" },
    ],
    Delhi: [
      { value: "", label: "Select City" },
      { value: "New Delhi", label: "New Delhi" },
      { value: "Dwarka", label: "Dwarka" },
      { value: "Rohini", label: "Rohini" },
    ],
  };

  useEffect(() => {
    validateForm();
  }, [
    supplierName,
    supplierCountry,
    supplierCompany,
    supplierState,
    supplierCity,
    supplierEmail,
    supplierPhone,
    supplierTouched,
  ]);

  const validateForm = () => {
    const newErrors = {};

    // Supplier Name
    if (supplierTouched.supplierName) {
      if (!supplierName.trim()) {
        newErrors.supplierName = "Supplier Name is required.";
      } else if (supplierName.length > 50) {
        newErrors.supplierName = "Supplier Name cannot exceed 50 characters.";
      }
    }

    // Supplier Name
    if (supplierTouched.supplierCompany) {
      if (!supplierCompany.trim()) {
        newErrors.supplierCompany = "Supplier Company is required.";
      } else if (supplierName.length > 50) {
        newErrors.supplierCompany = "Supplier Company cannot exceed 50 characters.";
      }
    }

    // Country
    if (supplierTouched.supplierCountry) {
      if (!supplierCountry.trim()) {
        newErrors.supplierCountry = "Country is required.";
      }
    }

    // State/Province
    if (supplierTouched.supplierState) {
      if (!supplierState.trim()) {
        newErrors.supplierState = "State/Province is required.";
      }
    }

    // City
    if (supplierTouched.supplierCity) {
      if (!supplierCity.trim()) {
        newErrors.supplierCity = "City is required.";
      }
    }

    // Email Address
    if (supplierTouched.supplierEmail) {
      if (!supplierEmail.trim()) {
        newErrors.supplierEmail = "Email Address is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(supplierEmail)
      ) {
        newErrors.supplierEmail = "Invalid email address.";
      }
    }

    // Phone Number
    if (supplierTouched.supplierPhone) {
      const phoneNumber = supplierPhone.replace(/\s+/g, "");
      if (!phoneNumber.trim()) {
        newErrors.supplierPhone = "Phone Number is required.";
      } else if (!/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
        newErrors.supplierPhone = "Invalid phone number. Use E.164 format.";
      }
    }

    setSupplierErrors(newErrors);

    // Determine if the form is valid
    const isValid =
      supplierName &&
      supplierCompany &&
      supplierCountry &&
      supplierState &&
      supplierCity &&
      supplierEmail &&
      supplierPhone &&
      Object.keys(newErrors).length === 0;

    setIsFormValid(isValid);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched to trigger validation messages
    setSupplierTouched({
      supplierName: true,
      supplierCompany:true,
      supplierCountry: true,
      supplierState: true,
      supplierCity: true,
      supplierEmail: true,
      supplierPhone: true,
    });

    // After marking fields as touched, validation will run via useEffect
    // To ensure form submission happens after validation, use a timeout
    setTimeout(() => {
      if (isFormValid) {
        const formData = {
          supplierName,
          supplierCompany,
          supplierCountry,
          supplierState,
          supplierCity,
          supplierEmail,
          supplierPhone,
        };

        console.log("Supplier Form Data Submitted:", formData);
        // TODO: Submit the data to the server here

        // Reset form fields and touched state
        setSupplierName("");
        supplierCompany("");
        setSupplierCountry("");
        setSupplierState("");
        setSupplierCity("");
        setSupplierEmail("");
        setSupplierPhone("");
        setSupplierTouched({
          supplierName: false,
          supplierCompany:false,
          supplierCountry: false,
          supplierState: false,
          supplierCity: false,
          supplierEmail: false,
          supplierPhone: false,
        });
        setSupplierErrors({});
        setIsFormValid(false);
      }
    }, 0);
  };

  const handleBlur = (field) => {
    setSupplierTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleCountryChange = (e) => {
    setSupplierCountry(e.target.value);
    setSupplierState("");
    setSupplierCity("");
  };

  const handleStateChange = (e) => {
    setSupplierState(e.target.value);
    setSupplierCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[80%] bg-[#EBEEFD] ms-[10%] rounded-2xl shadow-md gap-4 gap-y-10 px-6 mt-[100px] py-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Supplier Name */}
          <div className="flex flex-col">
            <label htmlFor="supplierName" className="font-medium mb-1">
              Supplier Name
            </label>
            <input
              id="supplierName"
              name="supplierName"
              className={`rounded-md border ${
                supplierErrors.supplierName
                  ? "border-red-500"
                  : "border-gray-300"
              } px-3 py-2`}
              type="text"
              placeholder="Enter Supplier Name"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              onBlur={() => handleBlur("supplierName")}
            />
            <small className="text-sm text-gray-500 mt-1">
              Max 50 characters
            </small>
            {supplierErrors.supplierName && (
              <span className="text-sm text-red-500 mt-1">
                {supplierErrors.supplierName}
              </span>
            )}
          </div>
          {/* Company Name */}

          <div className="flex flex-col">
            <label htmlFor="supplierName" className="font-medium mb-1">
              Company Name
            </label>
            <input
              id="supplierCompany"
              name="supplierCompany"
              className={`rounded-md border ${
                supplierErrors.supplierCompany
                  ? "border-red-500"
                  : "border-gray-300"
              } px-3 py-2`}
              type="text"
              placeholder="Enter Company Name"
              value={supplierCompany}
              onChange={(e) =>  setSupplierCompany(e.target.value)}
              onBlur={() => handleBlur("supplierCompany")}
            />
            <small className="text-sm text-gray-500 mt-1">
              Max 50 characters
            </small>
            {supplierErrors.supplierCompany && (
              <span className="text-sm text-red-500 mt-1">
                {supplierErrors.supplierCompany}
              </span>
            )}
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label htmlFor="supplierCountry" className="font-medium mb-1">
              Country
            </label>
            <select
              id="supplierCountry"
              name="supplierCountry"
              className={`rounded-md border ${
                supplierErrors.supplierCountry
                  ? "border-red-500"
                  : "border-gray-300"
              } px-3 py-2`}
              value={supplierCountry}
              onChange={handleCountryChange}
              onBlur={() => handleBlur("supplierCountry")}
            >
              {countryOptions.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            <small className="text-sm text-gray-500 mt-1">
            Select country from the list
            </small>
            {supplierErrors.supplierCountry && (
              <span className="text-sm text-red-500 mt-1">
                {supplierErrors.supplierCountry}
              </span>
            )}
          </div>

          {/* State/Province */}
          <div className="flex flex-col">
            <label htmlFor="supplierState" className="font-medium mb-1">
              State/Province
            </label>
            <select
              id="supplierState"
              name="supplierState"
              className={`rounded-md border ${
                supplierErrors.supplierState
                  ? "border-red-500"
                  : "border-gray-300"
              } px-3 py-2`}
              value={supplierState}
              onChange={handleStateChange}
              onBlur={() => handleBlur("supplierState")}
              disabled={!supplierCountry}
            >
              {supplierCountry &&
                stateOptions[supplierCountry].map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
            </select>
            <small className="text-sm text-gray-500 mt-1">
            Select state from the list
            </small>
            {supplierErrors.supplierState && (
              <span className="text-sm text-red-500 mt-1">
                {supplierErrors.supplierState}
              </span>
            )}
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label htmlFor="supplierCity" className="font-medium mb-1">
              City
            </label>
            <select
              id="supplierCity"
              name="supplierCity"
              className={`rounded-md border ${
                supplierErrors.supplierCity
                  ? "border-red-500"
                  : "border-gray-300"
              } px-3 py-2`}
              value={supplierCity}
              onChange={(e) => setSupplierCity(e.target.value)}
              onBlur={() => handleBlur("supplierCity")}
              disabled={!supplierState}
            >
              {supplierState &&
                cityOptions[supplierState].map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
            </select>
            <small className="text-sm text-gray-500 mt-1">
            Select City from the list
            </small>
            {supplierErrors.supplierCity && (
              <span className="text-sm text-red-500 mt-1">
                {supplierErrors.supplierCity}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label htmlFor="supplierEmail" className="font-medium mb-1">
              Email Address
            </label>
            <input
              id="supplierEmail"
              name="supplierEmail"
              className={`rounded-md border ${
                supplierErrors.supplierEmail
                  ? "border-red-500"
                  : "border-gray-300"
              } px-3 py-2`}
              type="email"
              placeholder="Enter Email Address"
              value={supplierEmail}
              onChange={(e) => setSupplierEmail(e.target.value)}
              onBlur={() => handleBlur("supplierEmail")}
            />
            <small className="text-sm text-gray-500 mt-1">
            Valid email format
            </small>
            {supplierErrors.supplierEmail && (
              <span className="text-sm text-red-500 mt-1">
                {supplierErrors.supplierEmail}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="supplierPhone" className="font-medium mb-1">
              Phone Number
            </label>
            <input
              id="supplierPhone"
              name="supplierPhone"
              className={`rounded-md border ${
                supplierErrors.supplierPhone
                  ? "border-red-500"
                  : "border-gray-300"
              } px-3 py-2`}
              type="tel"
              placeholder="Enter Phone Number"
              value={supplierPhone}
              onChange={(e) => setSupplierPhone(e.target.value)}
              onBlur={() => handleBlur("supplierPhone")}
            />
            <small className="text-sm text-gray-500 mt-1">
              Format: +1234567890
            </small>
            {supplierErrors.supplierPhone && (
              <span className="text-sm text-red-500 mt-1">
                {supplierErrors.supplierPhone}
              </span>
            )}
          </div>
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

      <div className="mt-12 text-center">
        <p className="text-2xl font-bold">Submitted Data</p>
        <p>The data submitted by users will be displayed below.</p>
      </div>
    </form>
  );
}

export default SupplierDetails;
