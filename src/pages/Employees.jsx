import React, { useState, useContext } from "react";
import Header from "../components/header";
import { employeesData, employeesGrid } from "../data/dummy";
import { StateContext } from "../contexts/ContextProvider";

const Employees = () => {
  const { currentColor } = useContext(StateContext);
  const [sortedArray, setSortedArray] = useState(employeesData);
  const [search, setSearch] = useState("");
  const textHandle = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-secondary-dark-bg  bg-gray-200 rounded-3xl overflow-scroll">
      <Header category="page" title="Employees" />
      <div className="form-control">
        <div className="input-group flex justify-end mb-4">
          <input
            type="text"
            onChange={textHandle}
            placeholder="Search…"
            className="input input-bordered text-black bg-white border-2 border-solid border-slate-300"
          />
          <button
            className="btn btn-square border-none"
            style={{ backgroundColor: currentColor }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <table className="w-full overflow-scroll">
        <thead>
          <tr>
            {employeesGrid.map((emp, index) => (
              <th key={index} style={{ width: `${emp.width}px` }}>
                <button
                  className="bg-black text-white w-36 h-12 rounded-3xl px-1"
                  style={{ backgroundColor: currentColor }}>
                  {emp.headerText || emp.field}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedArray.map((row, index) => (
            <tr
              key={index}
              style={{
                display: `${row.Name.includes(search) ? "" : "none"}`,
              }}
              className="hover:bg-white rounded">
              <td className="text-center w-5">
                <img
                  src={row.EmployeeImage}
                  className="rounded-xl h-24 w-24 my-3 mx-auto"
                  style={{ minWidth: "6rem" }}
                  alt=""
                />
              </td>
              <td className="text-center">
                <p>{row.Name} </p>
              </td>
              <td className="text-center">
                <p>{row.Title} </p>
              </td>
              <td className="text-center">
                <p>{row.Country} </p>
              </td>
              <td className="text-center">
                <p>{row.HireDate}</p>
              </td>
              <td className="text-center">
                <p>{row.ReportsTo} </p>
              </td>
              <td className="text-center">
                <p>{row.EmployeeID} </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
