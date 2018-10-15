import React, { PureComponent, PropTypes } from 'react';
import { isEqual } from 'lodash';
import {
  DefaultAvatar1, DefaultAvatar2, DefaultAvatar3, DefaultAvatar4, DefaultAvatar5,
  DefaultAvatar6, DefaultAvatar7, DefaultAvatar8, DefaultAvatar9, DefaultAvatar10,
  DefaultAvatar11, DefaultAvatar12, DefaultAvatar13, DefaultAvatar14, DefaultAvatar15,
  DefaultAvatar16, DefaultAvatar17, DefaultAvatar18, DefaultAvatar19, DefaultAvatar20,
  DefaultAvatar21, DefaultAvatar22, DefaultAvatar23, DefaultAvatar24, DefaultAvatar25,
} from './DefaultAvatar';

export default class DefaultAvatar extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderDefaultAvatar = defaultAvatarNumber => {
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar1')) {
      return DefaultAvatar1;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar2')) {
      return DefaultAvatar2;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar3')) {
      return DefaultAvatar3;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar4')) {
      return DefaultAvatar4;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar5')) {
      return DefaultAvatar5;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar6')) {
      return DefaultAvatar6;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar7')) {
      return DefaultAvatar7;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar8')) {
      return DefaultAvatar8;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar9')) {
      return DefaultAvatar9;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar10')) {
      return DefaultAvatar10;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar11')) {
      return DefaultAvatar11;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar12')) {
      return DefaultAvatar12;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar13')) {
      return DefaultAvatar13;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar14')) {
      return DefaultAvatar14;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar15')) {
      return DefaultAvatar15;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar16')) {
      return DefaultAvatar16;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar17')) {
      return DefaultAvatar17;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar18')) {
      return DefaultAvatar18;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar19')) {
      return DefaultAvatar19;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar20')) {
      return DefaultAvatar20;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar21')) {
      return DefaultAvatar21;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar22')) {
      return DefaultAvatar22;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar23')) {
      return DefaultAvatar23;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar24')) {
      return DefaultAvatar24;
    }
    if (isEqual(defaultAvatarNumber, 'DefaultAvatar25')) {
      return DefaultAvatar25;
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
