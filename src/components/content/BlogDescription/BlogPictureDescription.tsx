import React, { useEffect } from "react";
import { IBlogPicture } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import "./BlogDescription.css";

interface IPropsGlobal {
  blogsPicture: IBlogPicture[];
  setBlogsPicture: (blogsPicture: IBlogPicture[]) => void;
}

const BlogPictureDescription: React.FC<
  IPropsGlobal & RouteComponentProps<{ blogId: string }>
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

  const path = "https://backendlevelup.herokuapp.com/uploads/";

  return (
    <div>
      {props.blogsPicture.map(blogP => (
        <div className="miniBlog" key={blogP._id}>
          <a href={blogP.link} target="_blank" rel="noopener noreferrer">
            <img className="miniPicture" alt="" src={path + blogP.img} />
          </a>

          <p>{blogP.description}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  blogsPicture: state.blogsPicture
});

const mapDispatchToProps = {
  setBlogsPicture: actions.setBlogsPicture
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPictureDescription);
