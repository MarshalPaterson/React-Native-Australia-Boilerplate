import React from "react";
import { Error } from "../types/Error";

const ErrorContext = React.createContext<Partial<Error>>({});

export const ErrorProvider = ErrorContext.Provider;
export const ErrorConsumer = ErrorContext.Consumer;

export default ErrorContext;
