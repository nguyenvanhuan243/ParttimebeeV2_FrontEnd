
import React, { PureComponent } from 'react';
export default class Subscribe extends PureComponent {
  constructor() {
    super();
    this.state = { emailValue: '' };
  }
  render() {
    // const requestUrl = 'https://azwebmall.us16.list-manage.com/subscribe/post?u=b7ad0359586fb6fdfbd8378ca&amp;id=ce67653993';
    const requestUrl = 'https://parttimebee.us17.list-manage.com/subscribe?u=4d666b9bc0056835bd8deb2ce&id=c454a1fe82';
    return (
      <div className="Subscribe">
        <div className="Subscribe-titleContainer">Subscribe</div>
        <div className="Subscribe-separate" />
        <div className="Subscribe-text">Receive latest jobs update in your inbox, every day!</div>
        <div className="Subscribe-image" />
        <div>
          <form action={requestUrl} method="POST" noValidate>
            <input
              type="email"
              name="EMAIL"
              className="Subscribe-emailFormCustom"
              placeholder="Your email"
              value={this.state.emailValue}
              onChange={(e) => this.setState({ emailValue: e.target.value })}
              autoCapitalize="off"
              autoCorrect="off"
            />
            <button className="Subscribe-button">
              <div className="Subscribe-buttonText"> SUBSCRIBE </div>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// Access to this link: https://us17.admin.mailchimp.com/lists/designer/?id=5821
