import React, { Component } from 'react';
import Header from 'components/Header/Loadable';

export default class EditAndPost extends Component {
  constructor() {
    super();
    this.state = {
      focusOnTitle: false,
      focusOnSalary: false,
      focusOnCity: false,
      focusOnDescription: false,
    };
  }
  render() {
    const {
      focusOnTitle,
      focusOnSalary,
      focusOnCity,
      focusOnDescription,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="EditAndPost">
          <div className="EditAndPost-title">
            Edit job
          </div>
          <div className="EditAndPost-content">
            <div className="EditAndPost-form">
              <div className="EditAndPost-formContainer">
                <div className="EditAndPost-lableContainer">
                  <div className="EditAndPost-lableTitle"> Title </div>
                  <div className="EditAndPost-lableCategory"> Job Category </div>
                  <div className="EditAndPost-lableDescription"> Job Description </div>
                  <div className="EditAndPost-lableSalary"> Salary </div>
                  <div className="EditAndPost-lableSalaryType"> Salary type </div>
                  <div className="EditAndPost-lableSalaryState"> Salary state </div>
                  <div className="EditAndPost-lableSalaryState"> City (optional) </div>
                </div>
                <div className="EditAndPost-inputContainer">
                  <form>
                    <div className="EditAndPost-inputTitle">
                      <input
                        className="EditAndPost-customInput"
                        laceholder="Title"
                        onFocus={() => this.setState({ focusOnTitle: true })}
                        onBlur={() => this.setState({ focusOnTitle: false })}
                      />
                    </div>
                    <div className={`${focusOnTitle ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <select className="EditAndPost-inputCategory">
                      <option> Category 1 </option>
                      <option> Category 1 </option>
                      <option> Category 1 </option>
                    </select>
                    <div className="EditAndPost-inputDescription">
                      <textarea
                        className="EditAndPost-textAria"
                        placeholder="Description"
                        onFocus={() => this.setState({ focusOnDescription: true })}
                        onBlur={() => this.setState({ focusOnDescription: false })}
                      />
                    </div>
                    <div className={`${focusOnDescription ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <div className="EditAndPost-inputSalary">
                      <input
                        className="EditAndPost-customInput"
                        placeholder="RM19.00"
                        onFocus={() => this.setState({ focusOnSalary: true })}
                        onBlur={() => this.setState({ focusOnSalary: false })}
                      />
                    </div>
                    <div className={`${focusOnSalary ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <div className="EditAndPost-inputSalaryType">
                      <select>
                        <option> Category 1 </option>
                        <option> Category 1 </option>
                        <option> Category 1 </option>
                      </select>
                    </div>
                    <div className="EditAndPost-inputSalaryState">
                      <select>
                        <option> Category 1 </option>
                      </select>
                    </div>
                    <div className="EditAndPost-inputCity">
                      <input
                        className="EditAndPost-customInput"
                        placeholder="inputCity"
                        onFocus={() => this.setState({ focusOnCity: true })}
                        onBlur={() => this.setState({ focusOnCity: false })}
                      />
                    </div>
                    <div className={`${focusOnCity ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <div className="EditAndPost-buttonContainer">
                      <button className="EditAndPost-buttonPreview"> Preview </button>
                      <button className="EditAndPost-buttonPostjob"> Post job </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="EditAndPost-sideBar">
              <div className="EditAndPost-sideBarTitle"> Title </div>
              <div className="EditAndPost-sideBarAbstract">
                <div> Title of the job. E.g. </div>
                <div> Medical Sales Executive </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

