import React, { useEffect } from "react";
import { IBlog } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import mountain from "../../../img/Blog/blogDesign1.png";
import styles from "./Blog.module.css";
import "./Blog.css";

interface IPropsGlobal {
  blogs: IBlog[];
  setBlogs: (blogs: IBlog[]) => void;
}

const BlogList: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  const { t } = useTranslation();  

  useEffect(() => {
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
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const path = "https://backendlevelup.herokuapp.com/public/uploads/";
  return (
    <div className="container allBlog">      
      {/* <div className="menuTop">
        <ul className="listTop">
          <li>All Posts</li>
          <li>Career Tips</li>
          <li>HR Tips</li>
        </ul>
      </div> */}
      <div className="container blog1">
        <div className="row blogTop">
          <div className="col-6 update">
            <h1>{t("blog_allBlogH1")}</h1>
            <h5>{t("blog_allBlogH5")}</h5>
            <h5>{t("blog_allBlogH52")}</h5>
            <Link to="/register">
              <button className="btn btn-grey greyButton">
                {t("blog_greyButton")}
              </button>
            </Link>
          </div>

          <div className="col-5 blog2">
            <img className="mountain" alt="" src={mountain} />
          </div>
        </div>
      </div>
      <h1 className="latestBlog">{t("blog_latestBlogH1")}</h1>

      <div className="container bodyCardsBlog">
        <div className="row">
          {props.blogs.map(blog => (
            <div key={blog._id} className="container col-6 cards">
              <div className="imagenBlog">
                <img src={path + blog.img} className="card-img" alt="" />
              </div>

              <div className="cardBody">
                <h5 className="title">{blog.title}</h5>
                <p className={styles.subtitle}>{blog.subtitle}</p>
                <p className="description">{blog.secondSubtitle}</p>
                <Link to={"/blog/description/" + blog._id}>
                  <button className="btn btn-outline-success readMore">
                    {t("blog_btn")}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
  blogs: state.blogs
});

const mapDispatchToProps = {
  setBlogs: actions.setBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);
