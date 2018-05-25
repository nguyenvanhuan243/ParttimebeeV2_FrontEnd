import React, { PureComponent, PropTypes } from 'react';

export default class ShowMoreIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      marginTop = '3',
    } = this.props;
    return (
      <svg style={{ marginTop }} height="6" width="10" viewBox="0 0 10 6">
        <path d="M1 1l4 4 4-4" fill="none" opacity=".4" stroke="#999" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }
}

ShowMoreIcon.propTypes = {
  marginTop: PropTypes.string,
};
