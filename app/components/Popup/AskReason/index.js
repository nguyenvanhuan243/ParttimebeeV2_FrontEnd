import React, { PureComponent, PropTypes } from 'react';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import DeleteConfirmation from 'components/Popup/DeleteConfirmation/Loadable';

export default class AskReasonPopup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      selectedOption: 'Reason5',
      showDeleteProfile: false,
    };
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

    return (
      <div>
        { showDeleteProfile && <DeleteConfirmation type={'ACCOUNT'} closeFunc={closePopupFunc} /> }
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
                    <form>
                      <div>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="1"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value="Reason1"
                            checked={selectedOption === 'Reason1'}
                          />
                          <label htmlFor="1" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === 'Reason1' ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              This account was a duplicate account.
                            </span>
                          </label>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="2"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value="Reason2"
                            checked={selectedOption === 'Reason2'}
                          />
                          <label htmlFor="2" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === 'Reason2' ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              I had a bad experience on the platform.
                            </span>
                          </label>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="3"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value="Reason3"
                            checked={selectedOption === 'Reason3'}
                          />
                          <label htmlFor="3" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === 'Reason3' ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              I’m no longer interested in this community.
                            </span>
                          </label>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="4"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value="Reason4"
                            checked={selectedOption === 'Reason4'}
                          />
                          <label htmlFor="4" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === 'Reason4' ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              I’m just taking a break.
                            </span>
                          </label>
                        </fieldset>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            id="5"
                            className="AskReasonPopup-radio"
                            onChange={(event) => this.setState({ selectedOption: event.target.value })}
                            type="radio"
                            value="Reason5"
                            checked={selectedOption === 'Reason5'}
                          />
                          <label htmlFor="5" className="AskReasonPopup-displayFlex">
                            <span className={`AskReasonPopup-radioCustom ${selectedOption === 'Reason5' ? 'AskReasonPopup-selected' : null}`} />
                            <span className="AskReasonPopup-inputText">
                              Other.
                            </span>
                          </label>
                        </fieldset>
                        <div className="AskReasonPopup-separate" />
                        <div className="AskReasonPopup-selectOptionTitle"> Feedback: </div>
                        <fieldset className="AskReasonPopup-fieldset">
                          <input
                            className="AskReasonPopup-custom"
                            placeholder="Type your feedback here…"
                            onChange={this.handleOptionChange}
                          />
                        </fieldset>
                        <div className="AskReasonPopup-separate" />
                        <div className="AskReasonPopup-note">
                          <span>
                            <b>Note:</b>  If you choose to delete your account, we will delete your profile and remove you from our mailing lists.This cannot be reversed.
                          </span>
                        </div>
                        <button
                          onClick={(e) => { this.handleSubmitForm(); e.preventDefault(); }}
                          className="AskReasonPopup-submitReport"
                        >
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

