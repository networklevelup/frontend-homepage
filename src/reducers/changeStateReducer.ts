import { TAction } from "../actions/actionsTypes";

export const changeStateReducer = (
  booleanState: boolean = true,
  action: TAction
) => {
  if (action.type === "CHANGE_STATE") {
    return action.booleanState;
  }
  return booleanState;
};
