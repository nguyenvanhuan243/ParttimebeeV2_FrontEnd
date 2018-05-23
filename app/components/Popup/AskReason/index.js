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

export default class AskReasonPopup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      selectedOption: 'Duplicate',
    };
  }
  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  }
  render() {
    const {
      selectedOption,
    } = this.state;
    const {
      closePopupFunc = () => {},
    } = this.props;

    return (
      <div className="AskReasonPopup">
        <button className="AskReasonPopup-closeButton" onClick={closePopupFunc}>
          <div className="AskReasonPopup-closeIcon">
            <CloseIcon />
          </div>
        </button>
        <div className="AskReasonPopup-reportJob">
          <div className="AskReasonPopup-reportJobContent">
            <div className="AskReasonPopup-reportJobTitle">
              Report job
            </div>
            <div className="AskReasonPopup-selectOptionContainer">
              <div className="AskReasonPopup-selectOptionTitle">
                This job is:
              </div>
              <div className="AskReasonPopup-selectOption">
                <form>
                  <div>
                    <fieldset className="AskReasonPopup-fieldset">
                      <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Spam" checked={selectedOption === 'Spam'} />
                      <span className="AskReasonPopup-inputText">
                        Spam
                      </span>
                    </fieldset>
                    <fieldset className="AskReasonPopup-fieldset">
                      <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Duplicate" checked={selectedOption === 'Duplicate'} />
                      <span className="AskReasonPopup-inputText">
                        Duplicate
                      </span>
                    </fieldset>
                    <fieldset className="AskReasonPopup-fieldset">
                      <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Inappropriate" checked={selectedOption === 'Inappropriate'} />
                      <span className="AskReasonPopup-inputText">
                        Inappropriate
                      </span>
                    </fieldset>
                    <fieldset className="AskReasonPopup-fieldset">
                      <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Needs editing" checked={selectedOption === 'Needs editing'} />
                      <span className="AskReasonPopup-inputText">
                        Needs editing
                      </span>
                    </fieldset>
                    <fieldset className="AskReasonPopup-fieldset">
                      <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Self promotion" checked={selectedOption === 'Self promotion'} />
                      <span className="AskReasonPopup-inputText">
                        Self promotion
                      </span>
                    </fieldset>
                    <fieldset className="AskReasonPopup-fieldset">
                      <input className="AskReasonPopup-radio" onChange={this.handleOptionChange} type="radio" value="Not working" checked={selectedOption === 'Not working'} />
                      <span className="AskReasonPopup-inputText">
                        Not working
                      </span>
                    </fieldset>
                    <button className="AskReasonPopup-submitReport">
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
      </div>
    );
  }
}

AskReasonPopup.propTypes = {
  closePopupFunc: PropTypes.func.isRequired,
};

