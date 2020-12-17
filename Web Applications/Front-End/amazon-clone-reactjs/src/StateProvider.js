import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();    // Creating an Empty Data-layer

export const StateProvider = ({ reducer, initialState, children }) => ( // Build Provider
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}      {/* App */}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);