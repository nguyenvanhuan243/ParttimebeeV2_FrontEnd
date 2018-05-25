/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent, PropTypes } from 'react';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import DeleteConfirmation from 'components/Popup/DeleteConfirmation/Loadable';

export default class AskReasonPopup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      selectedOption: 'Duplicate',
      showDeleteProfile: false,
    };
  }
  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  }
  handleSubmitForm() {
    const {
      closeAskReasonFunc = () => {},
      showDeleteProfileFunc = () => {},
      onSubmitFormFunc = () => {},
    } = this.props;
    closeAskReasonFunc();
    showDeleteProfileFunc();
    onSubmitFormFunc();
    this.setState({
      showDeleteProfile: !this.state.showDeleteProfile,
    });
  }
  render() {
    const {
      selectedOption,
      showDeleteProfile,
    } = this.state;
    const {
      closePopupFunc = () => {},
    } = this.props;

    return (
      <div>
        { showDeleteProfile ? <DeleteConfirmation type={'ACCOUNT'} closeFunc={closePopupFunc} /> : null}
        { !showDeleteProfile ?
          <div className="AskReasonPopup">
            <button className="AskReasonPopup-closeButton" onClick={closePopupFunc}>
              <CloseIcon />
            </button>
            <div className="AskReasonPopup-askReason">
              <div className="AskReasonPopup-askReasonContent">
                <div className="AskReasonPopup-askReasonTitle">
                  Why do you want to delete your account?
                </div>
                <div className="AskReasonPopup-selectOptionContainer">
                  <div className="AskReasonPopup-selectOptionTitle">
                    Reason:
                  </div>
                  <div>
                    <form>
                      <div>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Spam" checked={selectedOption === 'Spam'} />
                          <span className="AskReasonPopup-inputText">
                            This account was a duplicate account.
                          </span>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Duplicate" checked={selectedOption === 'Duplicate'} />
                          <span className="AskReasonPopup-inputText">
                            I had a bad experience on the platform.
                          </span>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Inappropriate" checked={selectedOption === 'Inappropriate'} />
                          <span className="AskReasonPopup-inputText">
                            I’m no longer interested in this community.
                          </span>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Needs editing" checked={selectedOption === 'Needs editing'} />
                          <span className="AskReasonPopup-inputText">
                            I’m just taking a break.
                          </span>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Self promotion" checked={selectedOption === 'Self promotion'} />
                          <span className="AskReasonPopup-inputText">
                            Other
                          </span>
                        </fieldset>
                        <div className="AskReasonPopup-separate">
                        </div>
                        <div className="AskReasonPopup-selectOptionTitle">
                          Feedback:
                        </div>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input placeholder="Type your feedback here…" onChange={this.handleOptionChange} />
                        </fieldset>
                        <div className="AskReasonPopup-separate">
                        </div>
                        <div className="AskReasonPopup-note">
                          <span>
                            <b>Note:</b>  If you choose to delete your account, we will delete your profile and remove you from our mailing lists.This cannot be reversed.
                          </span>
                        </div>
                        <button onClick={(e) => { this.handleSubmitForm(); e.preventDefault(); }} className="AskReasonPopup-submitReport">
                          <div className="AskReasonPopup-submitReportText">
                            Submit
                          </div>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> : null }
      </div>
    );
  }
}

AskReasonPopup.propTypes = {
  closePopupFunc: PropTypes.func.isRequired,
  closeAskReasonFunc: PropTypes.func.isRequired,
  showDeleteProfileFunc: PropTypes.func.isRequired,
  onSubmitFormFunc: PropTypes.func.isRequired,
};

