import {createContext} from "react";


interface StorytellersContext {
  storytellers: string[]
}

export const StorytellersContext = createContext<StorytellersContext>({
  storytellers:[]
});