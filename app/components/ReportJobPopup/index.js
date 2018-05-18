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

import React, { PureComponent } from 'react';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import classNames from 'classnames';

export default class ReportJobPopup extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      selectedOption: 'Duplicate',
      showPopup: false,
    };
  }
  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  }
  closeReportPopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    const {
      selectedOption,
      showPopup,
    } = this.state;

    const className = classNames('ReportJobPopup',
      { 'ReportJobPopup-closeReportPopup': showPopup }
    );

    return (
      <div className={className}>
        <button className="ReportJobPopup-closeButton" onClick={this.closeReportPopup}>
          <div className="ReportJobPopup-closeIcon">
            <CloseIcon />
          </div>
        </button>
        <div className="ReportJobPopup-reportJob">
          <div className="ReportJobPopup-reportJobContent">
            <div className="ReportJobPopup-reportJobTitle">
              Report job
            </div>
            <div className="ReportJobPopup-selectOptionContainer">
              <div className="ReportJobPopup-selectOptionTitle">
                This job is:
              </div>
              <div className="ReportJobPopup-selectOption">
                <form>
                  <div>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Spam" checked={selectedOption === 'Spam'} />
                      <span className="ReportJobPopup-inputText">
                        Spam
                      </span>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Duplicate" checked={selectedOption === 'Duplicate'} />
                      <span className="ReportJobPopup-inputText">
                        Duplicate
                      </span>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Inappropriate" checked={selectedOption === 'Inappropriate'} />
                      <span className="ReportJobPopup-inputText">
                        Inappropriate
                      </span>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Needs editing" checked={selectedOption === 'Needs editing'} />
                      <span className="ReportJobPopup-inputText">
                        Needs editing
                      </span>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Self promotion" checked={selectedOption === 'Self promotion'} />
                      <span className="ReportJobPopup-inputText">
                        Self promotion
                      </span>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Not working" checked={selectedOption === 'Not working'} />
                      <span className="ReportJobPopup-inputText">
                        Not working
                      </span>
                    </fieldset>
                    <button className="ReportJobPopup-submitReport">
                      <div className="ReportJobPopup-submitReportText">
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
