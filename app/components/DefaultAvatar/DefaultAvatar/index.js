import React, { PureComponent, PropTypes } from 'react';
import DefaultAvatar1 from './Avatar1';
import DefaultAvatar2 from './Avatar2';
export default class DefaultAvatar extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderDefaultAvatar = defaultAvatarNumber => {
    if (defaultAvatarNumber.includes('1')) {
      return DefaultAvatar1;
    }
    if (defaultAvatarNumber.includes('2')) {
      return DefaultAvatar2;
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
