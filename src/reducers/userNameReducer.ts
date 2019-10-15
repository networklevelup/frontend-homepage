import { TAction } from "../actions/actionsTypes";

export const UserNameReducer = (
  state: string = "",
  action: TAction
): string => {
  if (action.type === "SET_USER") {
    return action.userName;
  } else {
    return state;
  }
};
