/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import LoadingJobs from 'containers/General/LoadingJobs/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import JobDetail from 'containers/General/JobDetail/Loadable';
import JobByState from 'containers/General/JobByState/Loadable';
import EmployerAvailableJobs from 'containers/General/EmployerAvailableJobs/Loadable';
import MyJobs from 'containers/MyJobs/Loadable';
import Signup from 'components/LoginRegister/Signup/Loadable';
import Login from 'components/LoginRegister/Login/Loadable';
import ForgotPassword from 'components/LoginRegister/ForgotPassword/Loadable';
import ForgotPasswordIncoming from 'components/LoginRegister/ForgotPasswordIncoming/Loadable';
import EmailResetPassword from 'components/LoginRegister/EmailResetPassword/Loadable';
import ClickEmail1 from 'components/LoginRegister/ClickEmail1/Loadable';
import ClickEmail2 from 'components/LoginRegister/ClickEmail2/Loadable';
import EmailUpdatedPassword from 'components/LoginRegister/EmailUpdatedPassword/Loadable';
import TermsPage from 'components/Pages/Terms/Loadable';
import PolicyPage from 'components/Pages/Policy/Loadable';
import AboutPage from 'components/Pages/About/Loadable';
import EditJob from 'containers/PostJob/EditAndPost/Loadable';
import EditProfile from 'containers/MyProfile/EditProfile/Loadable';
export default function App() {
  return (
    <div>
      <Switch>
        {/* General */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/loading-jobs" component={LoadingJobs} />
        <Route exact path="/job-detail/:id" component={JobDetail} />
        <Route exact path="/job-by-state" component={JobByState} />
        <Route exact path="/employer-profile" component={MyJobs} />
        <Route exact path="/employer-available-jobs" component={EmployerAvailableJobs} />
        {/* Login / Register */}
        <Route exact path="/user/signup" component={Signup} />
        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/forgot-password" component={ForgotPassword} />
        <Route exact path="/user/email-reset-password" component={EmailResetPassword} />
        <Route exact path="/user/forgot-password-incoming" component={ForgotPasswordIncoming} />
        <Route exact path="/user/click-email1" component={ClickEmail1} />
        <Route exact path="/user/click-email2" component={ClickEmail2} />
        <Route exact path="/user/email-updated-password" component={EmailUpdatedPassword} />
        {/* Pages */}
        <Route exact path="/pages/terms" component={TermsPage} />
        <Route exact path="/pages/policy" component={PolicyPage} />
        <Route exact path="/pages/about" component={AboutPage} />
        {/* MY PROFILES */}
        <Route exact path="/myprofile/my-profile" component={MyJobs} />
        <Route exact path="/myprofile/edit-profile" component={EditProfile} />
        {/* MY JOBS */}
        <Route exact path="/myjobs/myjobs" component={MyJobs} />
        <Route exact path="/myjobs/myjobs-on-going-single/:id" component={JobDetail} />
        <Route exact path="/myjobs/myjobs-pending-single/:id" component={JobDetail} />
        <Route exact path="/myjobs/myjobs-expired-single/:id" component={JobDetail} />
        {/* POST JOBS */}
        <Route exact path="/postjobs-first-time-post-job" component={EditProfile} />
        <Route exact path="/postjobs-edit-job/:id" component={EditJob} />
        <Route exact path="/postjobs-post-job" component={EditJob} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
