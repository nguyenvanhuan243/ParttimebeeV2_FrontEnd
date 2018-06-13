import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import ImportantAlert from 'containers/PostJob/ImportantAlert/Loadable';
import axios from 'axios';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import config from '../../../../config';

export default class EditAndPost extends Component {
  constructor() {
    super();
    this.state = {
      focusOnTitle: false,
      focusOnCategory: false,
      focusOnSalary: false,
      focusOnSalaryType: false,
      focusOnSalaryState: false,
      focusOnCity: false,
      focusOnDescription: false,
      showAlert: true,
      buttonIsSubmited: 'Post',
    };
  }
  onSubmit = (e) => {
    const {
      buttonIsSubmited,
    } = this.state;
    e.preventDefault();
    const url = `${config.API_BASE_URL}/jobs`;
    axios.post(url, {
      title: this.title.value,
      category: this.category.value,
      description: this.description.ref,
      salary: this.salary.value,
      salaryType: this.salaryType.value,
      salaryState: this.salaryState.value,
      city: this.city.value,
      user_id: localStorage.currentUser,
      button_is_submited: buttonIsSubmited,
    }).then((response) => {
      location.replace(`${config.BASE_URL}/job-detail/${response.data.id}${buttonIsSubmited === 'Preview' ? '?preview' : ''}`);
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    const {
      focusOnTitle,
      focusOnCategory,
      focusOnSalary,
      focusOnSalaryType,
      focusOnSalaryState,
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
          { this.state.showAlert && <div className="EditAndPost-importantAlert">
            <ImportantAlert closeFunc={() => this.setState({ showAlert: false })} />
          </div> }
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
                  <form onSubmit={this.onSubmit}>
                    <div className="EditAndPost-inputTitle">
                      <input
                        className="EditAndPost-customInput"
                        placeholder="Title"
                        onFocus={() => this.setState({ focusOnTitle: true })}
                        onBlur={() => this.setState({ focusOnTitle: false })}
                        ref={(ref) => (this.title = ref)}
                        required
                      />
                    </div>
                    <div className={`${focusOnTitle ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <select
                      className={`${focusOnCategory ? 'EditAndPost-inputCategorySelected' : 'EditAndPost-inputCategory'}`}
                      onFocus={() => this.setState({ focusOnCategory: true })}
                      onBlur={() => this.setState({ focusOnCategory: false })}
                      ref={(ref) => (this.category = ref)}
                    >
                      <option> Home </option>
                      <option> Event </option>
                      <option> Education </option>
                      <option> Retails </option>
                      <option> Food </option>
                      <option> Administrative </option>
                      <option> Others </option>
                    </select>
                    <div className="EditAndPost-inputDescription">
                      <Editor
                        ref={(ref) => (this.description = ref)}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                        toolbar={{
                          inline: { inDropdown: true },
                          list: { inDropdown: true },
                          textAlign: { inDropdown: true },
                          link: { inDropdown: true },
                          history: { inDropdown: true },
                          fontFamily: {
                          },
                          embedded: {
                            className: undefined,
                            component: undefined,
                            popupClassName: undefined,
                            defaultSize: {
                              height: 'auto',
                              width: 'auto',
                            },
                          },
                        }}
                      />
                    </div>
                    <div className={`${focusOnDescription ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <div className="EditAndPost-inputSalary">
                      <input
                        className="EditAndPost-customInput"
                        placeholder="RM19.00"
                        type="number"
                        onFocus={() => this.setState({ focusOnSalary: true })}
                        onBlur={() => this.setState({ focusOnSalary: false })}
                        ref={(ref) => (this.salary = ref)}
                        required
                      />
                    </div>
                    <div className={`${focusOnSalary ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <select
                      className={`${focusOnSalaryType ? 'EditAndPost-inputSalaryTypeSelected' : 'EditAndPost-inputSalaryType'}`}
                      onFocus={() => this.setState({ focusOnSalaryType: true })}
                      onBlur={() => this.setState({ focusOnSalaryType: false })}
                      ref={(ref) => (this.salaryType = ref)}
                    >
                      <option> Per hour </option>
                      <option> Per day </option>
                      <option> Per month </option>
                    </select>
                    <div>
                      <select
                        className={`${focusOnSalaryState ? 'EditAndPost-inputSalaryStateSelected' : 'EditAndPost-inputSalaryState'}`}
                        onFocus={() => this.setState({ focusOnSalaryState: true })}
                        onBlur={() => this.setState({ focusOnSalaryState: false })}
                        ref={(ref) => (this.salaryState = ref)}
                      >
                        <option> Johor </option>
                        <option> Kuala Lumpur </option>
                        <option> Melaka </option>
                      </select>
                    </div>
                    <div className="EditAndPost-inputCity">
                      <input
                        className="EditAndPost-customInput"
                        placeholder="inputCity"
                        onFocus={() => this.setState({ focusOnCity: true })}
                        onBlur={() => this.setState({ focusOnCity: false })}
                        ref={(ref) => (this.city = ref)}
                      />
                    </div>
                    <div className={`${focusOnCity ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <div className="EditAndPost-buttonContainer">
                      <button
                        className="EditAndPost-buttonPreview"
                        onClick={() => this.setState({ buttonIsSubmited: 'Preview' })}
                      >
                        Preview
                      </button>
                      <button
                        className="EditAndPost-buttonPostjob"
                        onClick={() => this.setState({ buttonIsSubmited: 'Post' })}
                      >
                        Post job
                      </button>
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

