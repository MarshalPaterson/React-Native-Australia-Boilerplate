import React from "react";
import { Loader } from "../types/Loader";

const LoaderContext = React.createContext<Partial<Loader>>({});

export const LoaderProvider = LoaderContext.Provider;
export const LoaderConsumer = LoaderContext.Consumer;

export default LoaderContext;
