import mainReducer from "./reducer/reducer";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: mainReducer
})
export default store