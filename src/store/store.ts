import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { slice as appSlice } from "./appSlice";
import { slice as pageSlice } from "./pageSlice";
import { slice as menuSlice } from "./menuSlice";
import { slice as questionSlice } from "./questionSlice";
import { slice as featureSlice } from "./featureSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [pageSlice.name]: pageSlice.reducer,
      [menuSlice.name]: menuSlice.reducer,
      [questionSlice.name]: questionSlice.reducer,
      [featureSlice.name]: featureSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
