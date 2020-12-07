import React from "react";
import { Store } from "../types/store";

const StoreContext = React.createContext<Partial<Store>>({});

export const StoreProvider = StoreContext.Provider;
export const StoreConsumer = StoreContext.Consumer;

export default StoreContext;
