import { TAction } from "../actions/actionsTypes";
import { IUser } from "../interfaces/interfaces";

export const usersReducer = (state: IUser[] = [], action: TAction): IUser[] => {
  if (action.type === "SET_USERS") {
    return action.users;
  }
  if (action.type === "DELETE_USER") {
    const users = state;
    const index = users.findIndex(u => u._id === action.user_id);
    users.splice(index, 1);
    return [...users];
  }
  if (action.type === "PUT_USER") {
    const users = state;
    const index = users.findIndex(u => u._id === action.user_id);
    users[index] = action.user;
    return [...users];
  }
  if (action.type === "CREATE_USER") {
    const users = state;
    users.push(action.user);
    return [...users];
  }
  return state;
};
