import React from 'react'

const StoreContext = React.createContext({ })

export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer

export default StoreContext