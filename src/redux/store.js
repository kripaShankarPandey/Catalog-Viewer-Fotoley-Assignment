import { reducer } from "./reducer";
import { legacy_createStore } from 'redux';

// Creating store
export const store = legacy_createStore(reducer);
