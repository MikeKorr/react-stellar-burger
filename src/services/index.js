import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ingredientReducer } from "./reducers/ingredientsReducer";
import { scrollReducer } from "./reducers/scrollReduser";
import { detailReducer } from "./reducers/detailsReducer";
import { constructorReducer } from "./reducers/construcoReducer";

const rootReducer = combineReducers({
  ingredientReducer,
  scrollReducer,
  detailReducer,
  constructorReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
