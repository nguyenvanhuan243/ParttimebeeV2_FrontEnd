import React from 'react';
import Header from 'components/Header/Loadable';
import NotFoundPageIcon from 'components/Icons/NotFoundPage/Loadable';
import config from '../../../config';

const NotFound = () => (
  <div>
    <Header />
    <div className="NotFoundPage">
      <div className="NotFoundPage-icon">
        <NotFoundPageIcon />
      </div>
      <div className="">
        <span className="NotFoundPage-text">
          404 Page Not Found
        </span>
      </div>
      <div className="NotFoundPage-abstractContainer">
        <div className="NotFoundPage-abstract">
          <span className="NotFoundPage-aboveText">
            I don’t know why you come to this page<br></br>
          </span>
          <span className="NotFoundPage-belowText">
            but we’re sorry about that…
          </span>
        </div>
      </div>
      <div className="NotFoundPage-backToHome">
        <a href={`${config.BASE_URL}`} className="NotFoundPage-backToHomeText">
          BACK TO HOME
        </a>
      </div>
    </div>
  </div>
);
export default NotFound;
