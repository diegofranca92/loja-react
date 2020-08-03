export default (state, action) => {
    switch (action.type) {
      case "REMOVE_ITEM":
        return {
          ...state,
          items: state.items.filter(
            item => item.id !== action.payload
          )
        };
      case "ADD_ITEM":
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      case "EDIT_ITEM":
        const updatedItem = action.payload;
  
        const updatedItem = state.items.map(item => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          }
          return item;
        });
  
        return {
          ...state,
          items: updateditems
        };
      default:
        return state;
    }
  };