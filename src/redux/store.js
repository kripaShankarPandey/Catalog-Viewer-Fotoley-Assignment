import { reducer } from "./reducer";
import { legacy_createStore } from "redux";

// Creating store to share data globally to all components
export const store = legacy_createStore(reducer);
