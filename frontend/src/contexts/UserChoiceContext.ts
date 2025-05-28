import {createContext} from "react";


interface UserChoiceState {
  narrativeType: string|null,
  narrativeSubtype: string|null,
  researcher: string|null,
  storyteller: string|null,

}
export enum ActionType {
  narrativeType = 'narrativeTypeChanged',
  narrativeSubtype = 'narrativeSubtypeChanged',
  researcher = 'researcherChanged',
  storyteller = 'storytellerChanged'

}

interface UserChoiceState {
  narrativeType: string|null
  narrativeSubtype: string|null
  researcher: string|null
  storyteller: string|null
}
interface UserChoiceAction {
  type: ActionType,
  payload: string|null,
}

interface UserChoiceDispatch{
  (action:UserChoiceAction):void
}
export const UserChoiceContext = createContext<UserChoiceState>({
  narrativeType: null,
  narrativeSubtype: null,
  researcher: null,
  storyteller: null
});

export const UserChoiceDispatch = createContext<UserChoiceDispatch|null>(null);

export const reducer = (state: UserChoiceState, action: UserChoiceAction): UserChoiceState => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case ActionType.narrativeSubtype:
      return {
        ...state,
        narrativeSubtype: payload
      };

    case ActionType.narrativeType:
      return {
        ...state,
        narrativeType: payload
      };

    case ActionType.researcher:
      return {
        ...state,
        researcher: payload
      };

    case ActionType.storyteller:
      return {
        ...state,
        storyteller: payload
      };
    default:
      return state;
  }
}