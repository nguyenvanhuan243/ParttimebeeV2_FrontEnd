/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Header from 'components/Header/Loadable';
import NotFoundPageIcon from 'components/Icons/NotFoundPage/Loadable';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
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
          <div>
            <span className="NotFoundPage-abstract">
              I don’t know why you come to this page but we’re sorry about that…
            </span>
          </div>
          <div>
            <span className="NotFoundPage-backToHome">
              <span className="NotFoundPage-backToHomeText">
                BACK TO HOME
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
