/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
export default class Subscribe extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Subscribe">
        <div className="Subscribe-titleContainer">
          <div className="Subscribe-titleText">
            Subscribe
          </div>
        </div>
        <div className="">
          <div className="Subscribe-body">
            <div className="Subscribe-text">
              Receive latest jobs update in your inbox, every day!
            </div>
            <div className="Subscribe-image">
            </div>
            <div className="Subscribe-emailForm">
              <form>
                <input className="Subscribe-emailFormCustom" placeholder="Your email" />
                <button className="Subscribe-button">
                  <span className="Subscribe-buttonText">
                    SUBSCRIBE
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

