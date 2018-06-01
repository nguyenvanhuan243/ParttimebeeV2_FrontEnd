import React, { PureComponent, PropTypes } from 'react';
import config from '../../../../config';

export default class CategoryItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      text = 'Home',
      iconType = 'HomeIcon',
    } = this.props;
    return (
      <a className="CategoryItem-container" href={`${config.BASE_URL}/job-by-state`}>
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
  iconType: PropTypes.object,
};

