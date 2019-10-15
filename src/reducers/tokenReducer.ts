import { TAction } from "../actions/actionsTypes";

export const tokenReducer = (state: string = "", action: TAction): string => {
  if (action.type === "GET_TOKEN") {
    return action.token;
  }
  if (action.type === "RESET") {
    return "";
  }
  return state;
};
