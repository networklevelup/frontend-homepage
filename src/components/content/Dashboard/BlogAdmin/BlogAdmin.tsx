import React, { useEffect } from "react";
import { IBlog } from "../../../../interfaces/interfaces";
import * as actions from "../../../../actions/actions";
import { connect } from "react-redux";
import { RouteComponentProps, Redirect } from "react-router";
import { IGlobalState } from "../../../../reducers/reducers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import task from "../../../../img/BlogPicture/task.png";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import "./BlogAdmin.css";

interface IPropsGlobal {
  token: string;
  blogs: IBlog[];
  createBlog: (blog: IBlog) => void;
  setBlogs: (blogs: IBlog[]) => void;
}

const Blog: React.FC<
  IPropsGlobal & RouteComponentProps<{ blogId: string }>
> = props => {
  useEffect(() => {
    //con esto pinto los blogs de redux
    fetch("https://backendlevelup.herokuapp.com/apiBlog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        response.json().then(result => {
          props.setBlogs(result);
        });
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Hooks to save states */
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

  const newBlog = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("title", titleValue);
    data.append("subtitle", subtitleValue);
    data.append("secondSubtitle", secondSubtitleValue);
    data.append("description", descriptionValue);

    fetch("https://backendlevelup.herokuapp.com/apiBlog/", {
      method: "POST",
      body: data
    }).then(response => {
      if (response.ok) {
        response.json().then(blog => {
          props.createBlog(blog);
          props.history.push("/blog"); // To redirect
        });
      }
    });
  };

  if (!props.token) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div className="container blog">
        <label>Title</label>
        <input type="text" onChange={Title} />
        <label>Subtitle</label>
        <input type="text" onChange={Subtitle} />
        <label>Second Subtitle</label>
        <textarea
          rows={10}
          value={secondSubtitleValue}
          onChange={secondSubtitle}
        />
        <h2>Description</h2>
        <FontAwesomeIcon className="icon" icon={faEdit} size="6x" />{" "}
        {/*specific library for icons */}
        <textarea rows={10} onChange={Description} />
        <input type="file" className="file" onChange={handleFileUpload} />
        <button
          type="submit"
          className="btn btn-outline-info newBlog"
          onClick={newBlog}
        >
          Create New Blog
        </button>
      </div>

      <div className="container">
        <table
          className="table table-hover text-black table-bordered 
            blogTable table-responsive"
        >
          <thead className="thead-primary">
            <tr>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Second Subtitle</th>
              <th>Description</th>
              <th>
                <img className="task" alt="" src={task} />
              </th>
            </tr>
          </thead>
          <tbody>
            {props.blogs.map(blog => (
              <tr className="table-info" key={blog._id}>
                <td className="card-title">{blog.title}</td>
                <td className="card-text">{blog.subtitle}</td>
                <td className="card-text">{blog.secondSubtitle}</td>
                <td className="card-text">{blog.description}</td>
                <td>
                  <Link to={"/blog/" + blog._id}>UPDATE</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollUpButton
        EasingType="easeInOutQuad"
        ShowAtPosition={200}
        AnimationDuration={700}
      />
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  blogs: state.blogs,
  token: state.token
});

const mapDispatchToProps = {
  createBlog: actions.createBlog,
  setBlogs: actions.setBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
