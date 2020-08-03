import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Ishan Manandhar",
      location: "Kathmandu",
      designation: "Frontend Developer"
    }
  ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeItem(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id
    });
  }

  function addItem(items) {
    dispatch({
      type: "ADD_ITEM",
      payload: items
    });
  }

  function editItem(items) {
    dispatch({
      type: "EDIT_ITEM",
      payload: items
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        removeItem,
        addItem,
        editItem
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};