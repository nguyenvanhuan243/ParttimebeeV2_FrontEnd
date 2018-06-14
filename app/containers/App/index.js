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
import MyJobs from 'containers/MyJobs/MyJobs/Loadable';
import MyJobsNoJobs from 'containers/MyJobs/MyJobsNoJobs/Loadable';
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
import MyJobsOnGoingSingleEdit from 'containers/MyJobs/MyJobsOnGoingSingleEdit/Loadable';
import MyJobsPendingSingleEdit from 'containers/MyJobs/MyJobsPendingSingleEdit/Loadable';
import MyJobsExpiredSingleRepost from 'containers/MyJobs/MyJobsExpiredSingleRepost/Loadable';
import MyJobsOnGoingSingleEditToastBox from 'containers/MyJobs/MyJobsOnGoingSingleEditToastBox/Loadable';
import MyJobsPendingSingleEditToastBox from 'containers/MyJobs/MyJobsPendingSingleEditToastBox/Loadable';
import MyJobsExpiredSingleRepostToastBox from 'containers/MyJobs/MyJobsExpiredSingleRepostToastBox/Loadable';
import MyJobsDeleteConfirmationPopup from 'containers/MyJobs/MyJobsDeleteConfirmationPopup/Loadable';
import MyJobsDeleteConfirmationToastBox from 'containers/MyJobs/MyJobsDeleteConfirmationToastBox/Loadable';

// POST JOBS
import EditJob from 'containers/PostJob/EditAndPost/Loadable';
import FirstTimePostJob from 'containers/PostJob/FirstTimePostJob/Loadable';

import EditProfile from 'containers/MyProfile/EditProfile/Loadable';
export default function App() {
  return (
    <div>
      <Switch>
        {/* General */}
        <Route exact path="/test/" component={HomePage} />
        <Route exact path="/test/loading-jobs" component={LoadingJobs} />
        <Route exact path="/test/job-detail/:id" component={JobDetail} />
        <Route exact path="/test/job-by-state" component={JobByState} />
        <Route exact path="/test/employer-profile" component={MyJobs} />
        <Route exact path="/test/employer-available-jobs" component={EmployerAvailableJobs} />
        {/* Login / Register */}
        <Route exact path="/test/user/signup" component={Signup} />
        <Route exact path="/test/user/login" component={Login} />
        <Route exact path="/test/user/forgot-password" component={ForgotPassword} />
        <Route exact path="/test/user/email-reset-password" component={EmailResetPassword} />
        <Route exact path="/test/user/forgot-password-incoming" component={ForgotPasswordIncoming} />
        <Route exact path="/test/user/click-email1" component={ClickEmail1} />
        <Route exact path="/test/user/click-email2" component={ClickEmail2} />
        <Route exact path="/test/user/email-updated-password" component={EmailUpdatedPassword} />
        {/* Pages */}
        <Route exact path="/test/pages/terms" component={TermsPage} />
        <Route exact path="/test/pages/policy" component={PolicyPage} />
        <Route exact path="/test/pages/about" component={AboutPage} />
        {/* MY PROFILES */}
        <Route exact path="/test/myprofile/my-profile" component={MyJobs} />
        <Route exact path="/test/myprofile/edit-profile" component={EditProfile} />
        {/* MY JOBS */}
        <Route exact path="/test/myjobs/myjobs" component={MyJobs} />
        <Route exact path="/test/myjobs/myjobs-no-jobs" component={MyJobsNoJobs} />
        <Route exact path="/test/myjobs/myjobs-on-going-single/:id" component={JobDetail} />
        <Route exact path="/test/myjobs/myjobs-pending-single/:id" component={JobDetail} />
        <Route exact path="/test/myjobs/myjobs-expired-single/:id" component={JobDetail} />
        <Route exact path="/test/myjobs/myjobs-ongoing-single-edit" component={MyJobsOnGoingSingleEdit} />
        <Route exact path="/test/myjobs/myjobs-pending-single-edit" component={MyJobsPendingSingleEdit} />
        <Route exact path="/test/myjobs/myjobs-expired-single-repost" component={MyJobsExpiredSingleRepost} />
        <Route exact path="/test/myjobs/myjobs-on-going-single-edit-toast-box" component={MyJobsOnGoingSingleEditToastBox} />
        <Route exact path="/test/myjobs/myjobs-pending-single-edit-toast-box" component={MyJobsPendingSingleEditToastBox} />
        <Route exact path="/test/myjobs/myjobs-expired-single-repost-toast-box" component={MyJobsExpiredSingleRepostToastBox} />
        <Route exact path="/test/myjobs/myjobs-delete-confirmation-popup" component={MyJobsDeleteConfirmationPopup} />
        <Route exact path="/test/myjobs/myjobs-delete-confirmation-toast-box" component={MyJobsDeleteConfirmationToastBox} />
        {/* POST JOBS */}
        <Route exact path="/test/postjobs-first-time-post-job" component={FirstTimePostJob} />
        <Route exact path="/test/postjobs-edit-job" component={EditJob} />
        <Route exact path="/test/postjobs-post-job" component={EditJob} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
