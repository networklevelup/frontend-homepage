import React, { useEffect } from "react";
import { IBlog } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import { RouteComponentProps, Route } from "react-router";
import { connect } from "react-redux";
import BlogPictureDescription from "./BlogPictureDescription";
import * as actions from "../../../actions/actions";
import "./BlogDescription.css";

interface IPropsGlobal {
  blogs: IBlog[];
  setBlogs: (blogs: IBlog[]) => void;
}

const BlogDescription: React.FC<
  IPropsGlobal & RouteComponentProps<{ blogId: string }>
> = props => {
  const [titleValue, setTitle] = React.useState("");
  const [subtitleValue, setSubtitle] = React.useState("");
  const [secondSubtitleValue, setSecondSubtitle] = React.useState("");
  const [descriptionValue, setDescription] = React.useState("");
  const [file, setFile] = React.useState("");

  useEffect(() => {
    /*Needed this fetch again for when refreshing the browser */
    if (props.blogs.length === 0) {
      //calling redux to print blogs
      fetch("https://backendlevelup.herokuapp.com/apiBlog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          mode: "cors"
        }
      }).then(response => {
        if (response.ok) {
          response.json().then(result => {
            props.setBlogs(result);
          });
        }
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blog = React.useMemo(
    () => props.blogs.find(b => b._id === props.match.params.blogId), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      props.match.params.blogId,
      props.blogs
    ] /*need these two properties for when refreshing the browser */
  );

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setSubtitle(blog.subtitle);
      setSecondSubtitle(blog.secondSubtitle);
      setDescription(blog.description);
      setFile(blog.img);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog]);

  const path = "https://backendlevelup.herokuapp.com/uploads/";

  return (
    <div className="container bodyBlog">
      <div className="menuTop">
        <ul className="listTop">
          <li>All Posts</li>
          <li>Career Tips</li>
          <li>HR Tips</li>
        </ul>
      </div>
      <div className="row descriptionBlog">
        <div className="col-9 firstBlog">
          <h1 className="blogTitle">{titleValue}</h1>
          <h5 className="blogSubtitle">{subtitleValue}</h5>

          <div className="picture">
            <img alt="" src={path + file} className="pictureDescription" />
          </div>
          <h6 className="secondSubtitle">{secondSubtitleValue}</h6>
          <div className="blogDescription">
            <p>{descriptionValue}</p>
          </div>
        </div>
        <div className="col-3 bordering">
          <Route component={BlogPictureDescription} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  blogs: state.blogs
});

const mapDispatchToProps = {
  setBlogs: actions.setBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDescription);
