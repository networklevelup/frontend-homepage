import { IInsta } from "../interfaces/interfaces";
import { TAction } from "../actions/actionsTypes";

export const instaReducer = (
  state: IInsta[] = [],
  action: TAction
): IInsta[] => {
  if (action.type === "SET_INSTAGRAM") {
    return action.instagram;
  }
  return state;
};
