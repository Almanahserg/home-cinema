import React from 'react';

const CinemaContext = React.createContext({});

export const CinemaProvider = CinemaContext.Provider;
export const CinemaConsumer = CinemaContext.Consumer;

export default CinemaContext