// import React, { createContext, useReducer } from "react";
// import AppReducer from "./AppReducer";
// const initialState = {
//   transactions: [
//     { id: 1, text: "Flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 300 },
//     { id: 3, text: "Book", amount: -10 },
//     { id: 4, text: "Camera", amount: 150 },
//   ],
// };

// export const GlobalContext = createContext(initialState);
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   return (
//     <GlobalContext.Provider value={{ transaction: state.transactions }}>
//       {children}
//     </GlobalContext.Provider>
//   );import React, { createContext, useReducer } from "react";
// import AppReducer from "./AppReducer";

// // Initial state
// const initialState = {
//   transactions: [
//     { id: 1, text: "Flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 300 },
//     { id: 3, text: "Book", amount: -10 },
//     { id: 4, text: "Camera", amount: 150 },
//   ],
// };

// // Create context
// export const GlobalContext = createContext(initialState);

// // Provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   // Actions
//   function deleteTransaction(id) {
//     dispatch({
//       type: 'DELETE_TRANSACTION',
//       payload: id
//     });
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         transactions: state.transactions,
//         deleteTransaction
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
