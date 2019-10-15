import { TAction } from "../actions/actionsTypes";
import { IBlog } from "../interfaces/interfaces";

export const blogReducer = (state: IBlog[] = [], action: TAction): IBlog[] => {
  if (action.type === "SET_BLOGS") {
    return action.blogs;
  }
  if (action.type === "CREATE_BLOG") {
    const blogs = state;
    blogs.push(action.blog);
    return [...blogs];
  }
  if (action.type === "DELETE_BLOG") {
    const blogs = state;
    const index = blogs.findIndex(blog => blog._id === action.blog_id);
    blogs.splice(index, 1);
    return [...blogs];
  }
  if (action.type === "UPDATE_BLOG") {
    const blogs = state;
    const index = blogs.findIndex(blog => blog._id === action.blog_id);
    blogs[index] = action.blog;
    return [...blogs];
  }

  return state;
};
