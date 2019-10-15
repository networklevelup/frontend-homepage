import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import UserList from "./Dashboard/UsersList/UsersList";
import Blog from "./Blog/Blog";
import BlogAdmin from "./Dashboard/BlogAdmin/BlogAdmin";
import BlogDetails from "./Dashboard/BlogDetails/BlogDetails";
import Talents from "./Talents/Talents";
import UserDetails from "./Dashboard/UserDetails/UserDetails";
import BlogDescription from "./BlogDescription/BlogDescription";
import BlogPictures from "./Dashboard/BlogAdmin/BlogPictures";
import BlogPictureDetails from "./Dashboard/BlogDetails/BlogPictureDetails";
import Contact from "./Contact/Contact";
import Register from "./Register/Register";
import CompaniesList from "./Dashboard/CompaniesList/CompaniesList";
import CompaniesDetails from "./Dashboard/CompaniesDetails/CompaniesDetails";
import Verification from "./Verification/Verification";
import VerificationCompanies from "./Verification/VerificationCompanies";
import Privacy from "./Privacy Terms/Privacy";
import RegisterUserVerification from "./Verification/RegisterUserVerification";
import RegisterCompanyVerification from "./Verification/RegisterCompanyVerification";
import NoFound from "./NoFound/NoFound";
import Video from "./Home/Video";
import SiteNotice from "./SiteNotice/SiteNotice";
import Team from "./Team/Team";
import JobOffer from "./Team/JobOffer";
import Companies from "./Companies/Companies";
import TermsConditions from "./Terms of Conditions/TermsConditions";
import Login from "./Login/Login";

const Content: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/talents" exact component={Talents} />
      <Route path="/companies" exact component={Companies} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/companies/list" exact component={CompaniesList} />
      <Route path="/users/list" exact component={UserList} />
      <Route path="/users/:userId?" exact component={UserDetails} />
      <Route path="/companies/:companyId?" exact component={CompaniesDetails} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/admin" exact component={BlogAdmin} />
      <Route path="/blog/picture" exact component={BlogPictures} />
      <Route path="/blog/:blogId?" exact component={BlogDetails} />
      <Route
        path="/blog/picture/:blogId?"
        exact
        component={BlogPictureDetails}
      />
      <Route
        path="/blog/description/:blogId?"
        exact
        component={BlogDescription}
      />
      <Route path="/contact" exact component={Contact} />
      <Route path="/verify/:userId?" exact component={Verification} />{" "}
      {/* Verification emails */}
      <Route
        path="/verify/companies/:companyId?"
        exact
        component={VerificationCompanies}
      />
      <Route
        path="/register/user/verification"
        exact
        component={RegisterUserVerification}
      />
      <Route
        path="/register/company/verification"
        exact
        component={RegisterCompanyVerification}
      />
      <Route path="/conditions/terms" exact component={TermsConditions} />
      <Route path="/privacy/terms" exact component={Privacy} />
      <Route path="/site/notice" exact component={SiteNotice} />
      <Route path="/team" exact component={Team} />
      <Route path="/job/offer" exact component={JobOffer} />
      <Route path="/video" exact component={Video} />
      <Route path="*" component={NoFound} /> {/*Component 404*/}
    </Switch>
  );
};

export default Content;
