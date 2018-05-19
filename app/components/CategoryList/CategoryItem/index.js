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

import React, { PureComponent, PropTypes } from 'react';
import config from '../../../../config';

export default class CategoryItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      text = 'Home',
      iconType = 'HomeIcon',
    } = this.props;
    return (
      <a href={`${config.BASE_URL}/job-by-state`}>
        <div className="CategoryItem">
          <div className="CategoryItem-icon">
            { iconType }
          </div>
          <div className="CategoryItem-text">
            { text }
          </div>
        </div>
      </a>
    );
  }
}
CategoryItem.propTypes = {
  text: PropTypes.string,
  iconType: PropTypes.string,
};

