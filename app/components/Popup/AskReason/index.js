import React, { PureComponent, PropTypes } from 'react';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import DeleteConfirmation from 'components/Popup/DeleteConfirmation/Loadable';
import axios from 'axios';
import config from '../../../../config';

const REASON = {
  reason1: 'This account was a duplicate account.',
  reason2: 'I had a bad experience on the platform.',
  reason3: 'I’m no longer interested in this community.',
  reason4: 'I’m just taking a break.',
  reason5: 'Other',
};

export default class AskReasonPopup extends PureComponent {
  constructor() {
    super();
    this.state = {
      selectedOption: REASON.reason5,
      showDeleteProfile: false,
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const requestUrl = `${config.API_BASE_URL}/feedbacks`;
    axios.post(requestUrl, {
      user_id: localStorage.currentUser,
      reason: this.state.selectedOption,
      text: this.text.value,
    });
    this.handleSubmitForm();
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
    this.setState({ showDeleteProfile: !this.state.showDeleteProfile });
  }
  render() {
    const { selectedOption, showDeleteProfile } = this.state;
    const { closePopupFunc = () => {} } = this.props;
    const feedBackStyle = {
      resize: 'none',
    };

    return (
      <div>
        { showDeleteProfile && <DeleteConfirmation
          type={'ACCOUNT'}
          closeFunc={closePopupFunc}
          currentUserId={localStorage.currentUser}
        /> }
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
                  <div className="AskReasonPopup-selectOptionTitle"> Reason: </div>
                  <div>
                    <form onSubmit={this.onSubmit}>
                      <div>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="1"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value={REASON.reason1}
                            checked={selectedOption === REASON.reason1}
                          />
                          <label htmlFor="1" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === REASON.reason1 ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              { REASON.reason1 }
                            </span>
                          </label>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="2"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value={REASON.reason2}
                            checked={selectedOption === REASON.reason2}
                          />
                          <label htmlFor="2" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === REASON.reason2 ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              { REASON.reason2 }
                            </span>
                          </label>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="3"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value={REASON.reason3}
                            checked={selectedOption === REASON.reason3}
                          />
                          <label htmlFor="3" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === REASON.reason3 ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              { REASON.reason3 }
                            </span>
                          </label>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="4"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value={REASON.reason4}
                            checked={selectedOption === REASON.reason4}
                          />
                          <label htmlFor="4" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === REASON.reason4 ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              { REASON.reason4 }
                            </span>
                          </label>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="5"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value={REASON.reason5}
                            checked={selectedOption === REASON.reason5}
                          />
                          <label htmlFor="5" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === REASON.reason5 ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              { REASON.reason5 }
                            </span>
                          </label>
                        </fieldset>
                        <div className="AskReasonPopup-separate" />
                        <div className="AskReasonPopup-selectOptionTitle"> Feedback: </div>
                        <fieldset className="AskReasonPopup-fieldset">
                          <textarea
                            className="AskReasonPopup-custom"
                            placeholder="Type your feedback here…"
                            ref={(ref) => (this.text = ref)}
                            cols="55"
                            rows="3"
                            style={feedBackStyle}
                          />
                        </fieldset>
                        <div className="AskReasonPopup-marginBonus" />
                        <div className="AskReasonPopup-separate" />
                        <div className="AskReasonPopup-note">
                          <span>
                            <b>Note:</b>  If you choose to delete your account, we will delete your profile and remove you from our mailing lists.This cannot be reversed.
                          </span>
                        </div>
                        <button className="AskReasonPopup-submitReport">
                          <div className="AskReasonPopup-submitReportText"> Submit </div>
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

