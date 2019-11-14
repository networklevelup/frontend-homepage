import { ActionCreator } from "redux";
import { TAction } from "./actionsTypes";
import {
  IUser,
  IBlog,
  IInsta,
  IBlogPicture,
  ICompany,
  ISkills
} from "../interfaces/interfaces";

export const getToken: ActionCreator<TAction> = (token: string) => ({
  type: "GET_TOKEN",
  token
});

export const reset: ActionCreator<TAction> = (token: string) => ({
  type: "RESET",
  token
});

export const setUserName: ActionCreator<TAction> = (userName: string) => ({
  type: "SET_USER",
  userName
});

export const setUsers: ActionCreator<TAction> = (users: IUser[]) => ({
  type: "SET_USERS",
  users
});

export const createUser: ActionCreator<TAction> = (user: IUser) => ({
  type: "CREATE_USER",
  user
});

export const deleteUser: ActionCreator<TAction> = (user_id: string) => ({
  type: "DELETE_USER",
  user_id
});

export const updateUser: ActionCreator<TAction> = (
  user: IUser,
  user_id: string
) => ({
  type: "PUT_USER",
  user,
  user_id
});

export const setBlogs: ActionCreator<TAction> = (blogs: IBlog[]) => ({
  type: "SET_BLOGS",
  blogs
});

export const createBlog: ActionCreator<TAction> = (blog: IBlog) => ({
  type: "CREATE_BLOG",
  blog
});

export const deleteBlog: ActionCreator<TAction> = (blog_id: string) => ({
  type: "DELETE_BLOG",
  blog_id
});

export const updateBlog: ActionCreator<TAction> = (
  blog: IBlog,
  blog_id: string
) => ({
  type: "UPDATE_BLOG",
  blog,
  blog_id
});

export const setInstagram: ActionCreator<TAction> = (instagram: IInsta[]) => ({
  type: "SET_INSTAGRAM",
  instagram
});

export const setBlogsPicture: ActionCreator<TAction> = (
  blogsPicture: IBlogPicture[]
) => ({
  type: "SET_BLOGS_PICTURE",
  blogsPicture
});

export const create_BlogPicture: ActionCreator<TAction> = (
  blogPicture: IBlogPicture
) => ({
  type: "CREATE_BLOG_PICTURE",
  blogPicture
});

export const deleteBlogPicture: ActionCreator<TAction> = (
  blogPicture_id: string
) => ({
  type: "DELETE_BLOG_PICTURE",
  blogPicture_id
});

export const updateBlogPicture: ActionCreator<TAction> = (
  blogPicture: IBlogPicture,
  blogPicture_id: string
) => ({
  type: "UPDATE_BLOG_PICTURE",
  blogPicture,
  blogPicture_id
});

export const createCompany: ActionCreator<TAction> = (company: ICompany) => ({
  type: "CREATE_COMPANY",
  company
});

export const setCompanies: ActionCreator<TAction> = (
  companies: ICompany[]
) => ({
  type: "SET_COMPANIES",
  companies
});

export const deleteCompany: ActionCreator<TAction> = (company_id: string) => ({
  type: "DELETE_COMPANY",
  company_id
});

export const updateCompany: ActionCreator<TAction> = (
  company: ICompany,
  company_id: string
) => ({
  type: "PUT_COMPANY",
  company,
  company_id
});

export const changingState: ActionCreator<TAction> = (
  booleanState: boolean
) => ({
  type: "CHANGE_STATE",
  booleanState
});

export const setSkills : ActionCreator<TAction> =(
  skills: ISkills[]
) => ({
  type: "SET_SKILLS",
  skills
});