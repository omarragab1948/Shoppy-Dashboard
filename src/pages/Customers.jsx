import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { customersData, customersGrid } from "../data/dummy";
import { StateContext } from "../contexts/ContextProvider";
const Customers = () => {
  const { currentColor } = useContext(StateContext);
  const [sortedArray, setSortedArray] = useState(customersData);
  const [ids, setIds] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [checkcontroll, setCheckControll] = useState(false);
  const handleCheck = () => {
    setCheckControll(!checkcontroll);
  };
  const handleDelete = (e) => {
    ids.push(e);
    setFilter(removeDuplicates(ids));
  };
  function removeDuplicates(ids) {
    return ids.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
  const textHandle = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-secondary-dark-bg  bg-gray-200 rounded-3xl overflow-scroll">
      <Header category="page" title="Customers" />
      <div className="form-control mb-5 flex flex-row justify-between">
          <div className="input-group flex justify-end ">
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
          <tr className="">
            <th className="flex pt-3">
              <input
                type="checkbox"
                onClick={() => handleCheck()}
                className="w-12"></input>
            </th>
            {customersGrid.map((order, index) => (
              <th key={index} style={{ width: `${order.width}px` }}>
                <button
                  className="text-white w-36 h-12 rounded-3xl px-1"
                  style={{ backgroundColor: currentColor }}>
                  {order.headerText}
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
                display: `${row.CustomerName.includes(search) ? "" : "none"}`,
              }}
              className="hover:bg-white">
              <td>
                {checkcontroll ? (
                  <input
                    type="checkbox"
                    checked={checkcontroll && true}
                    className="w-6 "
                  />
                ) : (
                  <input
                    type="checkbox"
                    onClick={() => handleDelete(row.CustomerID)}
                    className="w-6 "
                  />
                )}
              </td>
              <td className="text-center flex  items-center">
                <img
                  src={row.CustomerImage}
                  className="rounded-full h-12 w-12 my-3 "
                  alt=""
                />
                <p className="text-sm mx-auto">{row.CustomerName} </p>
              </td>
              <td className="text-center">
                <p>{row.ProjectName} </p>
              </td>
              <td className="text-center">
                <p
                  style={{ backgroundColor: `${row.StatusBg}` }}
                  className="text-white py-1 px-3 rounded-xl font-bold w-fit mx-auto">
                  {row.Status}
                </p>
              </td>
              <td className="text-center">
                <p>{row.Weeks} </p>
              </td>
              <td className="text-center">
                <p>{row.Budget} </p>
              </td>
              <td className="text-center">
                <p>{row.Location} </p>
              </td>
              <td className="text-center">
                <p>{row.CustomerID} </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
