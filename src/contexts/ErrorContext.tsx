import React from 'react'

const ErrorContext = React.createContext({ })

export const ErrorProvider = ErrorContext.Provider
export const ErrorConsumer = ErrorContext.Consumer

export default ErrorContext