import React from 'react'

const LoaderContext = React.createContext({ })

export const LoaderProvider = LoaderContext.Provider
export const LoaderConsumer = LoaderContext.Consumer

export default LoaderContext