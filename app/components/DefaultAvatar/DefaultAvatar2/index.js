import React, { PureComponent, PropTypes } from 'react';
import Avatar2 from './Avatar2';
export default class DefaultAvatar2 extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      avatarWidth = '40px',
      avatarHeight = '40px',
    } = this.props;
    const style = {
      width: avatarWidth,
      height: avatarHeight,
    };
    return (
      <svg style={style} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        { Avatar2 }
      </svg>
    );
  }
}

DefaultAvatar2.propTypes = {
  avatarWidth: PropTypes.string,
  avatarHeight: PropTypes.string,
};
