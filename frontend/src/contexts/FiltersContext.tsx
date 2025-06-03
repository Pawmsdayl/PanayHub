import {createContext, useReducer} from "react";
import * as React from "react";

enum ActionType  {
  setResearcherFilter= 'SETRESEARCHERFILTER',
  setStorytellerFilter= 'SETSTORYTELLERFILTER'
}

interface FilterAction {
  type: ActionType;
  payload: string[];
}

interface FilterState {
  researchers: string[]
  storytellers: string[]
}

interface FilterDispatch {
  (action:FilterAction): void;
}

const FiltersContext = createContext<FilterState|null>(null);

const FiltersDispatchContext = createContext<FilterDispatch|null>(null);


const reducer = (state: FilterState, action:FilterAction): FilterState=> {
  const {
    type,
    payload
  } = action;
  switch (type){
    case ActionType.setResearcherFilter:
      return {
        ...state,
        researchers: payload
        // researchers: [...state.researchers, payload]
      };
    case ActionType.setStorytellerFilter:
      return {
        ...state,
        storytellers: payload
      };
    default:
      return state;
  }
}

export function FiltersProvider({children}: {children: React.ReactNode}) {
  const [filters, dispatch] = useReducer(reducer, {
    researchers: [],
    storytellers: [],
  });

  return (
    <FiltersContext.Provider value={filters}>
      <FiltersDispatchContext.Provider value={dispatch}>
        {children}
      </FiltersDispatchContext.Provider>
    </FiltersContext.Provider>
  );
}
