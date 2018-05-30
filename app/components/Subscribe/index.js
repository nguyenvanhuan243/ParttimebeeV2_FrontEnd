
import React, { PureComponent } from 'react';

export default class Subscribe extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      emailValue: '',
    };
  }
  handleSubscribe(e) {
    this.setState({
      emailValue: e.target.value,
    });
  }
  render() {
    const requestUrl = 'https://azwebmall.us16.list-manage.com/subscribe/post?u=b7ad0359586fb6fdfbd8378ca&amp;id=ce67653993';
    const {
      emailValue,
    } = this.state;
    return (
      <div className="Subscribe">
        <div className="Subscribe-titleContainer">
          <div className="Subscribe-titleText">
            Subscribe
          </div>
        </div>
        <div className="Subscribe-separate">
        </div>
        <div className="">
          <div className="Subscribe-body">
            <div className="Subscribe-text">
              Receive latest jobs update in your inbox, every day!
            </div>
            <div className="Subscribe-image">
            </div>
            <div className="Subscribe-emailForm">
              <form action={requestUrl} method="POST" noValidate>
                <input
                  type="email"
                  name="EMAIL"
                  className="Subscribe-emailFormCustom"
                  placeholder="Your email"
                  value={emailValue}
                  onChange={(e) => this.handleSubscribe(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                />
                <button className="Subscribe-button">
                  <span className="Subscribe-buttonText">
                    SUBSCRIBE
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
