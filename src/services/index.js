import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ingredientReducer } from "./reducers/ingredientsReducer";

const rootReducer = combineReducers({
  ingredientReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
