import React from 'react'
// import { Store } from '../types/Store';

const Store = { name: "Tania", loggedIn: true };
const StoreContext = React.createContext({ store: Store })

export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer

export default StoreContext