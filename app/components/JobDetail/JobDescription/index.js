import React, { PureComponent, PropTypes } from 'react';
export default class JobDescription extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      text = '',
    } = this.props;
    return (
      <div className="JobDescription">
        <div className="JobDescription-content">
          { text }
        </div>
      </div>
    );
  }
}
JobDescription.propTypes = {
  text: PropTypes.string,
};

