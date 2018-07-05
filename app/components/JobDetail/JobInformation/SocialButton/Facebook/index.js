import React, { PureComponent } from 'react';
import FacebookIcon from 'components/Icons/Social/Facebook/Loadable';
import classNames from 'classnames';

export default class Facebook extends PureComponent {
  constructor() {
    super();
    this.state = { hover: false };
  }
  render() {
    const { hover } = this.state;
    const facebookClassNames = classNames('Facebook', { 'Facebook-hover': hover });
    const facebookTextClassNames = classNames('Facebook-text', { 'Facebook-textHover': hover });
    return (
      <div
        className={facebookClassNames}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <div className="Facebook-icon">
          <FacebookIcon hover={hover} />
        </div>
        <div className={facebookTextClassNames}>
          SHARE
        </div>
      </div>
    );
  }
}
