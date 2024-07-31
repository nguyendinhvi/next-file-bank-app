import { IGlobalContext } from "@/@interfaces/context/global";
import { User } from "@/@interfaces/model/user";

type IFuncState<T> = (value: T | ((prev: T) => void)) => void;
const dfFunc = () => {};

import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext<IGlobalContext>({
  setUser: dfFunc,
  user: undefined,
});

export const useContextGlobal = () => {
  const modalContext = useContext(GlobalContext);
  if (!modalContext) {
    throw new Error(
      "useWeb3Context() can only be used inside of <Web3ContextProvider />, " +
        "please declare it at a higher level."
    );
  }
  return modalContext;
};

export const GlobalContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | undefined>();

  const globalProvider: IGlobalContext = {
    user,
    setUser,
  };

  return (
    <GlobalContext.Provider value={globalProvider}>
      {children}
    </GlobalContext.Provider>
  );
};
