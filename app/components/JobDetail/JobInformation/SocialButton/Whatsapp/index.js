import React, { PureComponent } from 'react';
import WhatsappIcon from 'components/Icons/Social/Whatsapp/Loadable';
import classNames from 'classnames';

export default class Whatsapp extends PureComponent {
  constructor() {
    super();
    this.state = { hover: false };
  }
  handleHover() {
    this.setState({ hover: !this.state.hover });
  }
  render() {
    const { hover = false } = this.state;
    const whatsAppTextClassName = classNames('Whatsapp-text', {
      'Whatsapp-textHover': hover,
    });
    const whatsAppClassName = classNames('Whatsapp', {
      'Whatsapp-hover': hover,
    });
    return (
      <div
        className={whatsAppClassName}
        onMouseEnter={() => this.handleHover()}
        onMouseLeave={() => this.handleHover()}
      >
        <div className="Whatsapp-icon">
          <WhatsappIcon hover={hover} />
        </div>
        <div className={whatsAppTextClassName}>
          WHATSAPP
        </div>
      </div>
    );
  }
}
