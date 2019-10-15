import { TAction } from "../actions/actionsTypes";
import { IBlogPicture } from "../interfaces/interfaces";

export const blogPictureReducer = (
  state: IBlogPicture[] = [],
  action: TAction
): IBlogPicture[] => {
  if (action.type === "SET_BLOGS_PICTURE") {
    return action.blogsPicture;
  }
  if (action.type === "CREATE_BLOG_PICTURE") {
    const blogsPicture = state;
    blogsPicture.push(action.blogPicture);
    return [...blogsPicture];
  }
  if (action.type === "DELETE_BLOG_PICTURE") {
    const blogsPicture = state;
    const index = blogsPicture.findIndex(
      blogPicture => blogPicture._id === action.blogPicture_id
    );
    blogsPicture.splice(index, 1);
    return [...blogsPicture];
  }
  if (action.type === "UPDATE_BLOG_PICTURE") {
    const blogsPicture = state;
    const index = blogsPicture.findIndex(
      blogPicture => blogPicture._id === action.blogPicture_id
    );
    blogsPicture[index] = action.blogPicture;
    return [...blogsPicture];
  }

  return state;
};
