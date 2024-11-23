"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }) {
  return (
    // Provide the Redux store to the app
    <Provider store={store}>
      {/* Handle persistence and rehydration of the Redux store */}
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
}
