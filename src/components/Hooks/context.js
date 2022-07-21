import React, { createContext, useState } from "react";

export const LikeContext = createContext();

export const LikeContextProvider = ({ children }) => {
  const [like, setLike] = useState(false);
  return (
    <LikeContext.Provider value={[like, setLike]}>
      {children}
    </LikeContext.Provider>
  );
};
