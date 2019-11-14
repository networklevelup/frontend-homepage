import {
  IUser,
  IBlog,
  IInsta,
  IBlogPicture,
  ICompany,
  ISkills
} from "../interfaces/interfaces";

type TGetToken = {
  type: "GET_TOKEN";
  token: string;
};

type TReset = {
  type: "RESET";
};

type TSetUser = {
  type: "SET_USER";
  userName: string;
};

type TSetUsers = {
  type: "SET_USERS";
  users: IUser[];
};

type TDeleteUsers = {
  type: "DELETE_USER";
  user_id: string;
};

type TPutUsers = {
  type: "PUT_USER";
  user: IUser;
  user_id: string;
};

type TCreateUser = {
  type: "CREATE_USER";
  user: IUser;
};

type TSetBlogs = {
  type: "SET_BLOGS";
  blogs: IBlog[];
};

type TCreateBlog = {
  type: "CREATE_BLOG";
  blog: IBlog;
};
type TDeleteBlog = {
  type: "DELETE_BLOG";
  blog_id: string;
};

type TUpdateBlog = {
  type: "UPDATE_BLOG";
  blog: IBlog;
  blog_id: string;
};

type TInstagram = {
  type: "SET_INSTAGRAM";
  instagram: IInsta[];
};

type TSetBlogsPicture = {
  type: "SET_BLOGS_PICTURE";
  blogsPicture: IBlogPicture[];
};

type TCreateBlogPicture = {
  type: "CREATE_BLOG_PICTURE";
  blogPicture: IBlogPicture;
};
type TDeleteBlogPicture = {
  type: "DELETE_BLOG_PICTURE";
  blogPicture_id: string;
};

type TUpdateBlogPicture = {
  type: "UPDATE_BLOG_PICTURE";
  blogPicture: IBlogPicture;
  blogPicture_id: string;
};

type TCreateCompany = {
  type: "CREATE_COMPANY";
  company: ICompany;
};

type TSetCompany = {
  type: "SET_COMPANY";
  company: string;
};

type TSetCompanies = {
  type: "SET_COMPANIES";
  companies: ICompany[];
};

type TDeleteCompany = {
  type: "DELETE_COMPANY";
  company_id: string;
};

type TPutCompany = {
  type: "PUT_COMPANY";
  company: ICompany;
  company_id: string;
};

type TChangeState = {
  type: "CHANGE_STATE";
  booleanState: boolean;
};

type TSetSkills = {
  type: "SET_SKILLS";
  skills: ISkills[];
}

export type TAction =
  | TGetToken
  | TSetUser
  | TSetUsers
  | TDeleteUsers
  | TPutUsers
  | TCreateUser
  | TSetBlogs
  | TCreateBlog
  | TDeleteBlog
  | TUpdateBlog
  | TInstagram
  | TReset
  | TSetBlogsPicture
  | TCreateBlogPicture
  | TDeleteBlogPicture
  | TUpdateBlogPicture
  | TSetCompanies
  | TSetCompany
  | TDeleteCompany
  | TPutCompany
  | TCreateCompany
  | TChangeState
  | TSetSkills;
