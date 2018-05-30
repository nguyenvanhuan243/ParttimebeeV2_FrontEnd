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

import React, { Component } from 'react';
import Header from 'components/Header/Loadable';

export default class EditJob extends Component { // eslint-disable-line react/prefer-stateless-function
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
                      <input placeholder="Title" />
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
                      <input placeholder="Description" />
                    </div>
                    <div className="EditJob-separate"></div>
                    <div className="EditJob-inputSalary">
                      <input placeholder="Salary" />
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
                      <input placeholder="inputCity" />
                    </div>
                    <div className="EditJob-separate"></div>
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

