import React, { PureComponent, PropTypes } from 'react';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class ReportJobPopup extends PureComponent {
  constructor() {
    super();
    this.state = { selectedOption: 'Duplicate' };
  }
  onSubmit = () => {
    const url = `${config.API_BASE_URL}/admins`;
    const id = location.pathname.match(/\d+/)[0];
    axios.post(url, {
      report_type: this.state.selectedOption,
      job_id: id }
    );
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
                <form onSubmit={this.onSubmit}>
                  <div>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input
                        id="1"
                        className="ReportJobPopup-radio"
                        onChange={this.handleOptionChange}
                        type="radio"
                        value="Spam"
                        checked={selectedOption === 'Spam'}
                        ref={(ref) => (this.spam = ref)}
                      />
                      <label htmlFor="1" className="ReportJobPopup-displayFlex">
                        <span className={`ReportJobPopup-radioCustom ${selectedOption === 'Spam' ? 'ReportJobPopup-selected' : null}`} />
                        <span className="ReportJobPopup-inputText"> Spam</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input
                        id="2"
                        className="ReportJobPopup-radio"
                        onChange={this.handleOptionChange}
                        type="radio"
                        value="Duplicate"
                        checked={selectedOption === 'Duplicate'}
                      />
                      <label htmlFor="2" className="ReportJobPopup-displayFlex">
                        <span className={`ReportJobPopup-radioCustom ${selectedOption === 'Duplicate' ? 'ReportJobPopup-selected' : null}`} />
                        <span className="ReportJobPopup-inputText"> Duplicate</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input
                        id="3"
                        className="ReportJobPopup-radio"
                        onChange={this.handleOptionChange}
                        type="radio"
                        value="Inappropriate"
                        checked={selectedOption === 'Inappropriate'}
                      />
                      <label htmlFor="3" className="ReportJobPopup-displayFlex">
                        <span className={`ReportJobPopup-radioCustom ${selectedOption === 'Inappropriate' ? 'ReportJobPopup-selected' : null}`} />
                        <span className="ReportJobPopup-inputText"> Inappropriate</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input
                        id="4"
                        className="ReportJobPopup-radio"
                        onChange={this.handleOptionChange}
                        type="radio"
                        value="Needs editing"
                        checked={selectedOption === 'Needs editing'}
                      />
                      <label htmlFor="4" className="ReportJobPopup-displayFlex">
                        <span className={`ReportJobPopup-radioCustom ${selectedOption === 'Needs editing' ? 'ReportJobPopup-selected' : null}`} />
                        <span className="ReportJobPopup-inputText"> Needs editing</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input
                        id="5"
                        className="ReportJobPopup-radio"
                        onChange={this.handleOptionChange}
                        type="radio"
                        value="Self promotion"
                        checked={selectedOption === 'Self promotion'}
                      />
                      <label htmlFor="5" className="ReportJobPopup-displayFlex">
                        <div className={`ReportJobPopup-radioCustom ${selectedOption === 'Self promotion' ? 'ReportJobPopup-selected' : null}`} />
                        <span className="ReportJobPopup-inputText"> Self promotion</span>
                      </label>
                    </fieldset>
                    <fieldset className="ReportJobPopup-fieldset">
                      <input
                        id="6"
                        className="ReportJobPopup-radio"
                        onChange={this.handleOptionChange}
                        type="radio"
                        value="Not working"
                        checked={selectedOption === 'Not working'}
                      />
                      <label htmlFor="6" className="ReportJobPopup-displayFlex">
                        <span className={`ReportJobPopup-radioCustom ${selectedOption === 'Not working' ? 'ReportJobPopup-selected' : null}`} />
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

