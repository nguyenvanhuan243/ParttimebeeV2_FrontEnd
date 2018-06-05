import React, { PureComponent, PropTypes } from 'react';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';

export default class ReportJobPopup extends PureComponent {
  constructor() {
    super();
    this.state = { selectedOption: 'Duplicate' };
  }
  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }
  render() {
    const { selectedOption } = this.state;
    const { closePopupFunc = () => {} } = this.props;
    return (
      <div className="ReportJobPopup">
        <button className="ReportJobPopup-closeButton" onClick={closePopupFunc}> <CloseIcon /> </button>
        <div className="ReportJobPopup-reportJob">
          <div className="ReportJobPopup-reportJobContent">
            <div className="ReportJobPopup-reportJobTitle"> Report job </div>
            <div className="ReportJobPopup-selectOptionContainer">
              <div className="ReportJobPopup-selectOptionTitle"> This job is: </div>
              <div className="ReportJobPopup-selectOption">
                <form>
                  <div>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input id="1" className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Spam" checked={selectedOption === 'Spam'} />
                      <label htmlFor="1">
                        <span className="ReportJobPopup-inputText"> Spam</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input id="2" className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Duplicate" checked={selectedOption === 'Duplicate'} />
                      <label htmlFor="2">
                        <span className="ReportJobPopup-inputText"> Duplicate</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input id="3" className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Inappropriate" checked={selectedOption === 'Inappropriate'} />
                      <label htmlFor="3">
                        <span className="ReportJobPopup-inputText"> Inappropriate</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input id="4" className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Needs editing" checked={selectedOption === 'Needs editing'} />
                      <label htmlFor="4">
                        <span className="ReportJobPopup-inputText"> Needs editing</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input id="5" className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Self promotion" checked={selectedOption === 'Self promotion'} />
                      <label htmlFor="5">
                        <span className="ReportJobPopup-inputText"> Self promotion</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input id="6" className="ReportJobPopup-radio" onChange={this.handleOptionChange} type="radio" value="Not working" checked={selectedOption === 'Not working'} />
                      <label htmlFor="6">
                        <span className="ReportJobPopup-inputText"> Not working</span>
                      </label>
                    </fieldset>
                    <button className="ReportJobPopup-submitReport">
                      <div className="ReportJobPopup-submitReportText"> SUBMIT </div>
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
ReportJobPopup.propTypes = {
  closePopupFunc: PropTypes.func.isRequired,
};

