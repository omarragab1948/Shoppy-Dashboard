import React, { useState, useEffect, useContext } from "react";
import Header from "../components/header";
import { ordersData, ordersGrid } from "../data/dummy";
import { StateContext } from "../contexts/ContextProvider";

const Orders = () => {
  const [sortedArray, setSortedArray] = useState(ordersData);
  const { currentColor } = useContext(StateContext);
  useEffect(() => {
    const handleClick = (e) => {
      const sortBy = e.target.innerHTML;
      const sortFunction = (key) => (a, b) => {
        if (a[key] < b[key]) {
          return -1;
        } else if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      };

      const sortedCopy = [...sortedArray];

      switch (sortBy) {
        case "Status":
          sortedCopy.sort(sortFunction("Status"));
          break;
        case "Item":
          sortedCopy.sort(sortFunction("OrderItems"));
          break;
        case "Total Amount":
          sortedCopy.sort(sortFunction("TotalAmount"));
          break;
        case "Order ID":
          sortedCopy.sort(sortFunction("OrderID"));
          break;
        case "Location":
          sortedCopy.sort(sortFunction("Location"));
          break;
        case "Customer Name":
          sortedCopy.sort(sortFunction("CustomerName"));
          break;
        case "All":
          setSortedArray([...ordersData]);
          return;
        default:
          break;
      }
      setSortedArray(sortedCopy);
    };

    const tableHeaders = document.querySelectorAll("th button");
    tableHeaders.forEach((header) => {
      header.addEventListener("click", handleClick);
    });

    return () => {
      tableHeaders.forEach((header) => {
        header.removeEventListener("click", handleClick);
      });
    };
  }, [sortedArray]);

  return (
    <div className="m-2 dark:bg-main-dark-bg md:m-10 p-2 md:p-10 rounded-3xl overflow-scroll  bg-gray-200">
      <Header category="page" title="Orders" />
      <table className="w-full overflow-scroll dark:bg-secondary-dark-bg rounded-xl">
        <thead>
          <tr>
            {ordersGrid.map((order, index) => (
              <th key={index} style={{ width: `${order.width}px` }}>
                <button
                  className="text-white w-36 h-12 rounded-3xl px-1 m-2"
                  style={{ backgroundColor: currentColor }}>
                  {order.headerText}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedArray.map((row, index) => (
            <tr key={index} className="hover:bg-white">
              <td className="text-center w-5">
                <img
                  src={row.ProductImage}
                  className="rounded-xl h-24 w-24 my-3 mx-auto"
                  style={{ minWidth: "6rem" }}
                  alt=""
                />
              </td>
              <td className="text-center">
                <p>{row.OrderItems} </p>
              </td>
              <td className="text-center">
                <p>{row.CustomerName} </p>
              </td>
              <td className="text-center">
                <p>{row.TotalAmount} </p>
              </td>
              <td className="text-center">
                <p
                  style={{ backgroundColor: `${row.StatusBg}` }}
                  className="text-white py-1 px-3 rounded-xl font-bold w-fit mx-auto">
                  {row.Status}
                </p>
              </td>
              <td className="text-center">
                <p>{row.OrderID} </p>
              </td>
              <td className="text-center">
                <p>{row.Location} </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
