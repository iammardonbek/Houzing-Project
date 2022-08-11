import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [liked, setLiked] = useState([]);
  return (
    <FavoriteContext.Provider value={[liked, setLiked]}>
      {children}
    </FavoriteContext.Provider>
  );
};
