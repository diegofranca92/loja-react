import React, { createContext, useReducer } from "react";
import ItemReducer from "./ItemReducer";

const initialState = {
  items: [
    {
      id: 1,
      name: "Item Padrão",
      price: 4.00
    }
  ]
};

export const ItemContext = createContext(initialState);
export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

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
    <ItemContext.Provider
      value={{
        items: state.items,
        removeItem,
        addItem,
        editItem
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};