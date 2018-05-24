/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/icon-72x72.png';
import '!file-loader?name=[name].[ext]!./images/icon-96x96.png';
import '!file-loader?name=[name].[ext]!./images/icon-128x128.png';
import '!file-loader?name=[name].[ext]!./images/icon-144x144.png';
import '!file-loader?name=[name].[ext]!./images/icon-152x152.png';
import '!file-loader?name=[name].[ext]!./images/icon-192x192.png';
import '!file-loader?name=[name].[ext]!./images/icon-384x384.png';
import '!file-loader?name=[name].[ext]!./images/icon-512x512.png';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */

import 'components/Header/styles.css';
import 'components/CategoryList/styles.css';
import 'components/CategoryList/CategoryItem/styles.css';
import 'components/StateList/styles.css';
import 'components/JobList/styles.css';
import 'components/JobList/JobItem/styles.css';
import 'components/MyJobsComponent/Item/styles.css';
import 'containers/HomePage/styles.css';
import 'containers/General/JobDetail/styles.css';
import 'containers/General/JobByState/styles.css';
import 'components/Subscribe/styles.css';
import 'components/Sponsored/styles.css';
import 'containers/NotFoundPage/styles.css';
import 'components/Footer/styles.css';
import 'components/JobDetail/JobDetailHeader/styles.css';
import 'components/JobDetail/JobInformation/styles.css';
import 'components/JobDetail/JobDescription/styles.css';
import 'components/JobDetail/CompanyInfo/styles.css';
import 'components/JobDetail/JobInformation/SocialButton/Email/styles.css';
import 'components/JobDetail/JobInformation/SocialButton/Facebook/styles.css';
import 'components/JobDetail/JobInformation/SocialButton/Whatsapp/styles.css';
import 'components/EditProfile/Form/styles.css';
import 'components/EditProfile/Alert/styles.css';
import 'components/PostJobForm/styles.css';

// Advertiments
import 'components/Advertiments/RectangleGoogleAds/styles.css';
import 'components/Advertiments/SquareGoogleAds/styles.css';
import 'components/Advertiments/GoogleAds250276/styles.css';

// Related jobs
import 'components/JobDetail/RelatedJobList/styles.css';
import 'components/JobDetail/RelatedJobList/RelatedJobItem/styles.css';

// Login Register
import 'components/LoginRegister/Signup/styles.css';
import 'components/LoginRegister/Login/styles.css';
import 'components/LoginRegister/ForgotPassword/styles.css';
import 'components/LoginRegister/ForgotPasswordIncoming/styles.css';
import 'components/LoginRegister/EmailResetPassword/styles.css';
import 'components/LoginRegister/ClickEmail1/styles.css';
import 'components/LoginRegister/ClickEmail2/styles.css';
import 'components/LoginRegister/GeneralComponent/DashlineIcon/styles.css';
import 'components/LoginRegister/GeneralComponent/Form/styles.css';
import 'components/LoginRegister/EmailUpdatedPassword/styles.css';

// Pages
import 'components/Pages/About/styles.css';
import 'components/Pages/Terms/styles.css';
import 'components/Pages/Policy/styles.css';

// Loading jobs
import 'components/LoadingJobs/LoadingJobsList/styles.css';
import 'components/LoadingJobs/LoadingJobsList/LoadingJobsItem/styles.css';

// Report job popup
import 'components/Popup/ReportJob/styles.css';
import 'components/Popup/DeleteConfirmation/styles.css';
import 'components/Popup/AskReason/styles.css';
import 'components/Popup/DeleteProfile/styles.css';


// Employer Profile
import 'containers/General/EmployerAvailableJobs/styles.css';
import 'components/EmployerProfileBanner/styles.css';
import 'components/ShareThisProfile/styles.css';

// My jobs
import 'containers/MyJobs/MyJobs/styles.css';
import 'containers/MyJobs/MyJobsExpiredSingle/styles.css';
import 'containers/MyJobs/MyJobsNoJobs/styles.css';
import 'containers/MyJobs/MyJobsOnGoingSingle/styles.css';
import 'containers/MyJobs/MyJobsPendingSingle/styles.css';
import 'containers/MyJobs/MyJobsDeleteConfirmationPopup/styles.css';
import 'containers/MyJobs/MyJobsDeleteConfirmationToastBox/styles.css';
import 'containers/MyJobs/MyJobsExpiredSingleRepost/styles.css';
import 'containers/MyJobs/MyJobsExpiredSingleRepostToastBox/styles.css';
import 'containers/MyJobs/MyJobsOnGoingSingleEdit/styles.css';
import 'containers/MyJobs/MyJobsOnGoingSingleEditToastBox/styles.css';
import 'containers/MyJobs/MyJobsPendingSingleEdit/styles.css';
import 'containers/MyJobs/MyJobsPendingSingleEditToastBox/styles.css';

// Post jobs
import 'containers/PostJob/EditJob/styles.css';
import 'containers/PostJob/FirstTimePostJob/styles.css';
import 'containers/PostJob/SearchResult/styles.css';
import 'containers/PostJob/NoSearchResult/styles.css';
import 'containers/PostJob/PostJob/styles.css';
import 'containers/PostJob/PreView/styles.css';
import 'containers/PostJob/PostJobConfirmed/styles.css';

// MY PROFILE.
import 'containers/MyProfile/MyProfile/styles.css';
import 'containers/MyProfile/EditProfile/styles.css';
import 'containers/MyProfile/UpdatingProfile/styles.css';
import 'containers/MyProfile/SavingProfile/styles.css';
import 'containers/MyProfile/UpdatedProfile/styles.css';
import 'containers/MyProfile/DeleteProfileConfirmation/styles.css';
import 'containers/MyProfile/DeleteProfileCompleteMessage/styles.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
