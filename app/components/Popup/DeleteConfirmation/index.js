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

export default class DeleteConfirmationPopup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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
      closeFunc = () => {},
    } = this.props;

    return (
      <div className="DeleteConfirmationPopup">
        <button onClick={closeFunc} className="DeleteConfirmationPopup-closeButton">
          <div className="DeleteConfirmationPopup-closeIcon">
            <CloseIcon />
          </div>
        </button>
        <div className="DeleteConfirmationPopup-reportJob">
          <div className="DeleteConfirmationPopup-reportJobContent">
            <div className="DeleteConfirmationPopup-reportJobTitle">
              Report job
            </div>
            <div className="DeleteConfirmationPopup-selectOptionContainer">
              <div className="DeleteConfirmationPopup-selectOptionTitle">
                This job is:
              </div>
              <div className="DeleteConfirmationPopup-selectOption">
                <form>
                  <div>
                    <fieldset className="DeleteConfirmationPopup-fieldset">
                      <input className="DeleteConfirmationPopup-radio" onChange={this.handleOptionChange} type="radio" value="Spam" checked={selectedOption === 'Spam'} />
                      <span className="DeleteConfirmationPopup-inputText">
                        Spam
                      </span>
                    </fieldset>
                    <fieldset className="DeleteConfirmationPopup-fieldset">
                      <input className="DeleteConfirmationPopup-radio" onChange={this.handleOptionChange} type="radio" value="Duplicate" checked={selectedOption === 'Duplicate'} />
                      <span className="DeleteConfirmationPopup-inputText">
                        Duplicate
                      </span>
                    </fieldset>
                    <fieldset className="DeleteConfirmationPopup-fieldset">
                      <input className="DeleteConfirmationPopup-radio" onChange={this.handleOptionChange} type="radio" value="Inappropriate" checked={selectedOption === 'Inappropriate'} />
                      <span className="DeleteConfirmationPopup-inputText">
                        Inappropriate
                      </span>
                    </fieldset>
                    <fieldset className="DeleteConfirmationPopup-fieldset">
                      <input className="DeleteConfirmationPopup-radio" onChange={this.handleOptionChange} type="radio" value="Needs editing" checked={selectedOption === 'Needs editing'} />
                      <span className="DeleteConfirmationPopup-inputText">
                        Needs editing
                      </span>
                    </fieldset>
                    <fieldset className="DeleteConfirmationPopup-fieldset">
                      <input className="DeleteConfirmationPopup-radio" onChange={this.handleOptionChange} type="radio" value="Self promotion" checked={selectedOption === 'Self promotion'} />
                      <span className="DeleteConfirmationPopup-inputText">
                        Self promotion
                      </span>
                    </fieldset>
                    <fieldset className="DeleteConfirmationPopup-fieldset">
                      <input className="DeleteConfirmationPopup-radio" onChange={this.handleOptionChange} type="radio" value="Not working" checked={selectedOption === 'Not working'} />
                      <span className="DeleteConfirmationPopup-inputText">
                        Not working
                      </span>
                    </fieldset>
                    <button className="DeleteConfirmationPopup-submitReport">
                      <div className="DeleteConfirmationPopup-submitReportText">
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

DeleteConfirmationPopup.propTypes = {
  closeFunc: PropTypes.func.isRequired,
};

