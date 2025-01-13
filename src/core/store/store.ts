import { configureStore } from "@reduxjs/toolkit";
import bodyPartsSlice from "./features/bodyPartsSlice";

export const store = configureStore({
  reducer: {
    bodyParts: bodyPartsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
