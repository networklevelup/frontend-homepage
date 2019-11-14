import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { UserNameReducer } from "./userNameReducer";
import { usersReducer } from "./usersReducer";
import {
  IUser,
  IBlog,
  IInsta,
  IBlogPicture,
  ICompany,
  ISkills
} from "../interfaces/interfaces";
import { blogReducer } from "./blogReducer";
import { instaReducer } from "./instaReducer";
import { blogPictureReducer } from "./blogPictureReducer";
import { companiesReducer } from "./companiesReducer";
import { changeStateReducer } from "./changeStateReducer";
import { skillsReducer } from "./skillsReducer";

export interface IGlobalState {
  token: string;
  userName: string;
  users: IUser[];
  blogs: IBlog[];
  instagram: IInsta[];
  blogsPicture: IBlogPicture[];
  companies: ICompany[];
  booleanState: boolean;
  skills: ISkills[];
}

export const reducers = combineReducers({
  token: tokenReducer,
  userName: UserNameReducer,
  users: usersReducer,
  blogs: blogReducer,
  instagram: instaReducer,
  blogsPicture: blogPictureReducer,
  companies: companiesReducer,
  booleanState: changeStateReducer,
  skills: skillsReducer
});
