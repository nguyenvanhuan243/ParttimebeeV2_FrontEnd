import React, { Component } from 'react';
import Header from 'components/Header/Loadable';

export default class PostJob extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div className="EditJob">
          <div className="EditJob-title">
            Edit job
          </div>
          <div className="EditJob-content">
            <div className="EditJob-form">
              <div className="EditJob-formContainer">
                <div className="EditJob-lableContainer">
                  <div className="EditJob-lableTitle">
                    Title
                  </div>
                  <div className="EditJob-lableCategory">
                    Job Category
                  </div>
                  <div className="EditJob-lableDescription">
                    Job Description
                  </div>
                  <div className="EditJob-lableSalary">
                    Salary
                  </div>
                  <div className="EditJob-lableSalaryType">
                    Salary type
                  </div>
                  <div className="EditJob-lableSalaryState">
                    Salary state
                  </div>
                  <div className="EditJob-lableSalaryState">
                    City (optional)
                  </div>
                </div>
                <div className="EditJob-inputContainer">
                  <form>
                    <div className="EditJob-inputTitle">
                      <input className="EditJob-customInput" placeholder="Title" />
                    </div>
                    <div className="EditJob-separateActive"></div>
                    <select className="EditJob-inputCategory">
                      <option>
                        Category 1
                      </option>
                      <option>
                        Category 2
                      </option>
                      <option>
                        Category 3
                      </option>
                      <option>
                        Category 4
                      </option>
                    </select>
                    <div className="EditJob-inputDescription">
                      <textarea className="EditJob-textAria" placeholder="Description" />
                    </div>
                    <div className="EditJob-separate"></div>
                    <div className="EditJob-inputSalary">
                      <input className="EditJob-customInput" placeholder="Salary" />
                    </div>
                    <div className="EditJob-separate"></div>
                    <div className="EditJob-inputSalaryType">
                      <select>
                        <option>
                          option 1
                        </option>
                        <option>
                          option 2
                        </option>
                        <option>
                          option 3
                        </option>
                      </select>
                    </div>
                    <div className="EditJob-inputSalaryState">
                      <select>
                        <option>
                          State 1
                        </option>
                        <option>
                          State 2
                        </option>
                        <option>
                          State 3
                        </option>
                      </select>
                    </div>
                    <div className="EditJob-inputCity">
                      <input className="EditJob-customInput" placeholder="inputCity" />
                    </div>
                    <div className="EditJob-separate"></div>
                    <div className="EditJob-buttonContainer">
                      <button className="EditJob-buttonPreview">
                        Preview
                      </button>
                      <button className="EditJob-buttonPostjob">
                        Post job
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="EditJob-sideBar">
              <div className="EditJob-sideBarTitle">
                Title
              </div>
              <div className="EditJob-sideBarAbstract">
                <div>
                  Title of the job. E.g.
                </div>
                <div>
                  Medical Sales Executive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
