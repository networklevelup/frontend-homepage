import React, { useEffect } from "react";
import { IBlogPicture } from "../../../../interfaces/interfaces";
import * as actions from "../../../../actions/actions";
import { connect } from "react-redux";
import { RouteComponentProps, Redirect } from "react-router";
import { IGlobalState } from "../../../../reducers/reducers";
import { Link } from "react-router-dom";
import task from "../../../../img/BlogPicture/task.png";
import "./BlogPicture.css";

interface IPropsGlobal {
  token: string;
  blogsPicture: IBlogPicture[];
  createBlogPicture: (blogPicture: IBlogPicture) => void;
  setBlogsPicture: (blogsPicture: IBlogPicture[]) => void;
}
const BlogPicture: React.FC<
  IPropsGlobal & RouteComponentProps<{ blogIdPicture: string }>
> = props => {
  useEffect(() => {
    //con esto pinto los blogs de redux
    fetch("https://backendlevelup.herokuapp.com/apiBlogPicture/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        response.json().then(result => {
          props.setBlogsPicture(result);
        });
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [descriptionValue, setDescription] = React.useState("");
  const [linkValue, setLink] = React.useState("");
  const [file, setFile] = React.useState("");

  const Description = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(event.target.value);
  const LinkDirection = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLink(event.target.value);
  const handleFileUpload = (event: any) => {
    setFile(event.target.files[0]);
  };

  const newBlogPicture = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("description", descriptionValue);
    data.append("link", linkValue);

    fetch("https://backendlevelup.herokuapp.com/apiBlogPicture/", {
      method: "POST",
      body: data
    }).then(response => {
      if (response.ok) {
        response.json().then(blogPicture => {
          props.createBlogPicture(blogPicture);
          props.history.push("/blog"); // Esto para redireccionar
        });
      }
    });
  };

  if (!props.token) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {props.token && (
        <div className="container all">
          <div className="blogPicture">
            <div className="title">
              <h2>Description</h2>
            </div>

            <textarea
              rows={10}
              className="descriptionPicture"
              onChange={Description}
            />
            <h4>Link</h4>
            <input
              type="text"
              placeholder="Don't forget https://"
              onChange={LinkDirection}
            />
            <input
              type="file"
              className="file"
              name="file"
              onChange={handleFileUpload}
            />
            <button
              type="submit"
              className="btn btn-outline-success newBlog"
              onClick={newBlogPicture}
            >
              Create New BlogPicture
            </button>
          </div>

          <div className="container">
            <table
              className="table table-hover text-black table-bordered 
            blogTable table-responsive"
            >
              <thead className="thead-success">
                <tr>
                  <th>Description</th>
                  <th>Link</th>
                  <th>
                    <img className="task" alt="" src={task} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.blogsPicture.map(blogP => (
                  <tr className="table-success" key={blogP._id}>
                    <td className="card-text">{blogP.description}</td>
                    <td className="card-text">{blogP.link}</td>
                    <td>
                      <Link to={"/blog/picture/" + blogP._id}>UPDATE</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  blogsPicture: state.blogsPicture,
  token: state.token
});

const mapDispatchToProps = {
  createBlogPicture: actions.create_BlogPicture,
  setBlogsPicture: actions.setBlogsPicture
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPicture);
