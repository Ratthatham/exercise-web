import { configureStore } from "@reduxjs/toolkit";
import { apiFootBall } from "./apiFootBall/apiFootBall";

export const store = configureStore({
    reducer: {
        [apiFootBall.reducerPath]: apiFootBall.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiFootBall.middleware),
})