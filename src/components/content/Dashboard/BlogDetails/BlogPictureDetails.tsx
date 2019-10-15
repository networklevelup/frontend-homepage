import React, { useEffect } from "react";
import { IBlogPicture } from "../../../../interfaces/interfaces";
import { RouteComponentProps } from "react-router";
import * as actions from "../../../../actions/actions";
import { IGlobalState } from "../../../../reducers/reducers";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./BlogPictureDetails.css";

interface IpropsGlobal {
  token: string;
  blogsPicture: IBlogPicture[];
  deleteBlogPicture: (id: string) => void;
  updateBlogPicture: (id: string, blogPicture: IBlogPicture) => void;
}

const BlogPictureDetails: React.FC<
  IpropsGlobal & RouteComponentProps<{ blogId: string }>
> = props => {
  
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

  const blogPicture = React.useMemo( 
    () => props.blogsPicture.find(b => b._id === props.match.params.blogId),// eslint-disable-next-line react-hooks/exhaustive-deps
    [props.match.params.blogId]
  );

  useEffect(() => {
    if (blogPicture) {
      setDescription(blogPicture.description);
      setLink(blogPicture.link);
    }
  }, [blogPicture]);

  if (!blogPicture) {
    return <Redirect to="/blog/admin" />;
  }

  const updateBlog = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("description", descriptionValue);
    data.append("link", linkValue);

    fetch("https://backendlevelup.herokuapp.com/apiBlogPicture/" + blogPicture._id, {
      method: "PUT",
      body: data
    }).then(response => {
      if (response.ok) {
        response.json().then(b => {
          props.updateBlogPicture(blogPicture._id, b);
          props.history.push("/blog");
        });
      }
    });
  };

  const deleteBlog = () => {
    fetch("https://backendlevelup.herokuapp.com/apiBlogPicture/" + blogPicture._id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        props.deleteBlogPicture(blogPicture._id);
        props.history.push("/blog/picture");
      }
    });
  };

  return (
   <>
   {props.token &&  <div className="container">
      <div className="blogPictureDetails">
        <div className="title">
          <h2>Description</h2>
          <FontAwesomeIcon className="iconPicture" icon={faEdit} size="6x" />
        </div>
        <textarea rows={10} value={descriptionValue} onChange={Description} />
        <h4>Link</h4>
        <input type="text" value={linkValue} onChange={LinkDirection} />
        <input type="file" className="file" onChange={handleFileUpload} />
        <button className="btn btn-outline-danger delete" onClick={deleteBlog}>
          DELETE
        </button>
        <button className="btn btn-outline-success update" onClick={updateBlog}>
          UPDATE
        </button>
      </div>
    </div>}
   </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  blogsPicture: state.blogsPicture,
  token: state.token
});

const mapDispatchToProps = {
  deleteBlogPicture: actions.deleteBlogPicture,
  updateBlogPicture: actions.updateBlogPicture
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPictureDetails);
