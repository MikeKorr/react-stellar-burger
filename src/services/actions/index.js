export const SET_INGREDIENTS = "SET_INGREDIENTS";
export const SET_INGREDIENTS_ACTION = (ingredients) => {
  return {
    type: SET_INGREDIENTS,
    payload: ingredients,
  };
};

export const SET_ITEM = "SET_ITEM";
export const SET_ITEM_ACTION = (item) => {
  return {
    type: SET_ITEM,
    payload: item,
  };
};
