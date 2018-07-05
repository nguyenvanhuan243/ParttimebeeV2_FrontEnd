import React, { PureComponent } from 'react';
import EmailIcon from 'components/Icons/Social/Email/Loadable';
import classNames from 'classnames';

export default class Email extends PureComponent {
  constructor() {
    super();
    this.state = { hover: false };
  }
  render() {
    const { hover } = this.state;
    const emailTextClassName = classNames('Email-text', { 'Email-textHover': hover });
    const emailClassName = classNames('Email', { 'Email-hover': hover });
    return (
      <div
        className={emailClassName}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <div className="Email-icon">
          <EmailIcon hover={hover} />
        </div>
        <div className={emailTextClassName}>
          EMAIL
        </div>
      </div>
    );
  }
}

