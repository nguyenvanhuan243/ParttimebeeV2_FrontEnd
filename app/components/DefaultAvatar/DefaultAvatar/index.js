import React, { PureComponent, PropTypes } from 'react';
import DefaultAvatar1 from './Avatar1';
import DefaultAvatar2 from './Avatar2';
import DefaultAvatar3 from './Avatar3';
import DefaultAvatar4 from './Avatar4';
import DefaultAvatar5 from './Avatar5';
export default class DefaultAvatar extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderDefaultAvatar = defaultAvatarNumber => {
    if (defaultAvatarNumber.includes('1')) {
      return DefaultAvatar1;
    }
    if (defaultAvatarNumber.includes('2')) {
      return DefaultAvatar2;
    }
    if (defaultAvatarNumber.includes('3')) {
      return DefaultAvatar3;
    }
    if (defaultAvatarNumber.includes('4')) {
      return DefaultAvatar4;
    }
    if (defaultAvatarNumber.includes('5')) {
      return DefaultAvatar5;
    }
    return DefaultAvatar1;
  }
  render() {
    const {
      avatarWidth = '40px',
      avatarHeight = '40px',
      defaultAvatarNumber = '',
    } = this.props;
    const style = {
      width: avatarWidth,
      height: avatarHeight,
    };
    return (
      <svg style={style} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        { this.renderDefaultAvatar(defaultAvatarNumber) }
      </svg>
    );
  }
}
DefaultAvatar.propTypes = {
  avatarWidth: PropTypes.string,
  avatarHeight: PropTypes.string,
  defaultAvatarNumber: PropTypes.string,
};
