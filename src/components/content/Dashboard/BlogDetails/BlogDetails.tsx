import React, { useEffect } from "react";
import { IBlog } from "../../../../interfaces/interfaces";
import { RouteComponentProps } from "react-router";
import * as actions from "../../../../actions/actions";
import { IGlobalState } from "../../../../reducers/reducers";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./BlogDetails.css";

interface IpropsGlobal {
  token: string;
  blogs: IBlog[];
  deleteBlog: (id: string) => void;
  updateBlog: (id: string, blog: IBlog) => void;
}

const BlogDetails: React.FC<
  IpropsGlobal & RouteComponentProps<{ blogId: string }>
> = props => {
  const [titleValue, setTitle] = React.useState("");
  const [subtitleValue, setSubtitle] = React.useState("");
  const [secondSubtitleValue, setSecondSubtitle] = React.useState("");
  const [descriptionValue, setDescription] = React.useState("");
  const [file, setFile] = React.useState("");

  const Title = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const Subtitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSubtitle(event.target.value);
  const secondSubtitle = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setSecondSubtitle(event.target.value);
  const Description = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(event.target.value);

  const handleFileUpload = (event: any) => {
    setFile(event.target.files[0]);
  };

  const blog = React.useMemo(
    () => props.blogs.find(b => b._id === props.match.params.blogId), // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.match.params.blogId]
  );

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setSubtitle(blog.subtitle);
      setSecondSubtitle(blog.secondSubtitle);
      setDescription(blog.description);
    }
  }, [blog]);

  if (!blog) {
    return <Redirect to="/blog/admin" />;
  }

  const updateBlog = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("title", titleValue);
    data.append("subtitle", subtitleValue);
    data.append("secondSubtitle", secondSubtitleValue);
    data.append("description", descriptionValue);

    fetch("https://backendlevelup.herokuapp.com/apiBlog/" + blog._id, {
      method: "PUT",
      body: data
    }).then(response => {
      if (response.ok) {
        response.json().then(b => {
          props.updateBlog(blog._id, b);
          props.history.push("/blog");
        });
      }
    });
  };

  const deleteBlog = () => {
    fetch("https://backendlevelup.herokuapp.com/apiBlog/" + blog._id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        props.deleteBlog(blog._id);
        props.history.push("/blog/admin");
      }
    });
  };

  return (
    <>
      {props.token && (
        <div className="container">
          <div className="blogDetails">
            <label>Title</label>
            <input type="text" value={titleValue} onChange={Title} />
            <label>Subtitle</label>
            <input type="text" value={subtitleValue} onChange={Subtitle} />
            <label>Second Subtitle</label>
            <textarea
              rows={10}
              value={secondSubtitleValue}
              onChange={secondSubtitle}
            />
            <h2>Description</h2>
           
            <textarea
              rows={10}
              value={descriptionValue}
              onChange={Description}
            />
            <input
              type="file"
              className="file"
              name="file"
              onChange={handleFileUpload}
            />
            <button
              className="btn btn-outline-danger delete"
              onClick={deleteBlog}
            >
              DELETE
            </button>
            <button
              className="btn btn-outline-success update"
              onClick={updateBlog}
            >
              UPDATE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  blogs: state.blogs,
  token: state.token
});

const mapDispatchToProps = {
  deleteBlog: actions.deleteBlog,
  updateBlog: actions.updateBlog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetails);
