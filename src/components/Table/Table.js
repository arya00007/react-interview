import React from 'react'
const data = [
    {
      supplier: "ABC Supplies",
      itemName: "Steel Rods",
      quantity: 100,
      city: "Mumbai",
      country: "India",
      email: "abc@supplies.com",
      phoneNumber: "9876543210",
    },
    {
      supplier: "Global Parts",
      itemName: "Engine Oil",
      quantity: 250,
      city: "Delhi",
      country: "India",
      email: "contact@globalparts.com",
      phoneNumber: "9123456789",
    },
    {
      supplier: "Techno Tools",
      itemName: "Wrenches",
      quantity: 50,
      city: "Bangalore",
      country: "India",
      email: "support@technotools.com",
      phoneNumber: "9812345678",
    },
    {
      supplier: "Prime Hardware",
      itemName: "Nails",
      quantity: 500,
      city: "Chennai",
      country: "India",
      email: "sales@primehardware.com",
      phoneNumber: "9998877665",
    },
    {
      supplier: "Speed Electronics",
      itemName: "Resistors",
      quantity: 1000,
      city: "Hyderabad",
      country: "India",
      email: "info@speedelectronics.com",
      phoneNumber: "9678453212",
    },
  ];
  
function Table() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Uploaded Data
            </h2>
            <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
              Clear All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full testTable">
              <thead className="bg-gray-50 border-b-2">
                <tr className="border-b-[1px]">
                  <th className="px-4 py-2 ">
                    <input type="checkbox" className="form-checkbox h-4 w-4" />
                  </th>
                  <th className="px-4 py-2  text-left text-gray-600">
                    Supplier
                  </th>
                  <th className="px-4 py-2  text-left text-gray-600">
                    Item Name
                  </th>
                  <th className="px-4 py-2  text-left text-gray-600">
                    Quantity
                  </th>
                  <th className="px-4 py-2  text-left text-gray-600">City</th>
                  <th className="px-4 py-2  text-left text-gray-600">
                    Country
                  </th>
                  <th className="px-4 py-2  text-left text-gray-600">Email</th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="bg-white border-b-2">
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                      />
                    </td>
                    <td className="px-4 py-2 text-gray-700">{row.supplier}</td>
                    <td className="px-4 py-2 text-gray-700">{row.itemName}</td>
                    <td className="px-4 py-2 text-gray-700">{row.quantity}</td>
                    <td className="px-4 py-2 text-gray-700">{row.city}</td>
                    <td className="px-4 py-2 text-gray-700">{row.country}</td>
                    <td className="px-4 py-2 text-gray-700">{row.email}</td>
                    <td className="px-4 py-2 text-gray-700">
                      {row.phoneNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default Table