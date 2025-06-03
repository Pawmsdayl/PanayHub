import {createContext} from "react";


interface ResearchersContext{
  researchers: string[]
}
export const ResearchersContext = createContext<ResearchersContext>({
  researchers: []
});