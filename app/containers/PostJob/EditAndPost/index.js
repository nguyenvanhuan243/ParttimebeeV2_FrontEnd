import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import ImportantAlert from 'containers/PostJob/ImportantAlert/Loadable';
import JobSavedAlert from 'components/JobSavedAlert/Loadable';
import axios from 'axios';
import 'w3-css/w3.css';
import { convertFromHTML, ContentState, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import config from '../../../../config';

const jobId = location.pathname.match(/\d+/) && location.pathname.match(/\d+/)[0];
const hasEditJob = location.search.includes('edit-job');

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
      jobItem: {},
      titleValue: '',
      CategoryValue: '',
      SalaryValue: '',
      SalaryTypeValue: '',
      salaryStateValue: '',
      cityValue: '',
      hasJobSaved: false,
      editorState: EditorState.createEmpty(),
      characterLeft: 45,
    };
  }
  componentWillMount() {
    const requestUrl = `${config.API_BASE_URL}/jobs/${jobId}`;
    axios.get(requestUrl).then(
      (response) => {
        this.setState({ jobItem: response.data.job });
        const blocksFromHTML = convertFromHTML(this.state.jobItem.description);
        const state = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );
        this.setState({ editorState: EditorState.createWithContent(state) });
      }
    );
  }

  onSubmit = (e) => {
    const {
      buttonIsSubmited,
    } = this.state;
    e.preventDefault();
    if (hasEditJob) {
      document.getElementById('EditAndPost-bottom').scrollIntoView(true);
      const url = `${config.API_BASE_URL}/jobs/${jobId}`;
      this.setState({ hasJobSaved: !this.state.hasJobSaved });
      axios.put(url, {
        title: this.title.value,
        category: this.category.value,
        description: this.description.editor.innerHTML,
        salary: this.salary.value,
        salaryType: this.salaryType.value,
        salaryState: this.salaryState.value,
        city: this.city.value,
      });
    } else {
      const url = `${config.API_BASE_URL}/jobs`;
      axios.post(url, {
        title: this.title.value,
        category: this.category.value,
        description: this.description.editor.innerHTML,
        salary: this.salary.value,
        salaryType: this.salaryType.value,
        salaryState: this.salaryState.value,
        city: this.city.value,
        user_id: localStorage.currentUser,
        button_is_submited: buttonIsSubmited,
      }).then((response) => {
        location.replace(`${config.BASE_URL}/job-detail/${response.data.id}?${buttonIsSubmited === 'Preview' ? 'preview&' : ''}created&`);
      }).catch((error) => {
        console.log(error);
      });
    }
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
      jobItem,
      hasJobSaved,
      characterLeft,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="EditAndPost">
          <div className="EditAndPost-title">
            Post job
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
                        maxLength="45"
                        onFocus={() => this.setState({ focusOnTitle: true })}
                        onBlur={() => this.setState({ focusOnTitle: false })}
                        ref={(ref) => (this.title = ref)}
                        required
                        value={this.state.titleValue || (jobItem && jobItem.title)}
                        onChange={(e) => {
                          this.setState({
                            titleValue: e.target.value,
                            characterLeft: (45 - e.target.value.length),
                          });
                          if (this.state.titleValue === '') {
                            jobItem.title = '';
                          }
                        }}
                      />
                    </div>
                    <div className={`${focusOnTitle ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}>
                      <span className="EditAndPost-characterLeft">
                        { characterLeft }
                      </span>
                    </div>
                    <select
                      className={`${focusOnCategory ? 'EditAndPost-inputCategorySelected' : 'EditAndPost-inputCategory'}`}
                      onFocus={() => this.setState({ focusOnCategory: true })}
                      onBlur={() => this.setState({ focusOnCategory: false })}
                      ref={(ref) => (this.category = ref)}
                      value={this.state.CategoryValue || (jobItem && jobItem.category)}
                      onChange={(e) => this.setState({ CategoryValue: e.target.value })}
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
                        editorState={this.state.editorState}
                        onFocus={() => this.setState({ focusOnDescription: true })}
                        onBlur={() => this.setState({ focusOnDescription: false })}
                        editorRef={(ref) => (this.description = ref)}
                        wrapperClassName="EditAndPost-wrapper"
                        editorClassName="EditAndPost-editor"
                        onEditorStateChange={(editorState) => this.setState({ editorState })}
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
                        value={this.state.salaryValue || (jobItem && jobItem.salary)}
                        onChange={(e) => {
                          this.setState({ salaryValue: e.target.value });
                          if (this.state.salaryValue === '') {
                            jobItem.salary = '';
                          }
                        }}
                      />
                    </div>
                    <div className={`${focusOnSalary ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <select
                      className={`${focusOnSalaryType ? 'EditAndPost-inputSalaryTypeSelected' : 'EditAndPost-inputSalaryType'}`}
                      onFocus={() => this.setState({ focusOnSalaryType: true })}
                      onBlur={() => this.setState({ focusOnSalaryType: false })}
                      ref={(ref) => (this.salaryType = ref)}
                      value={this.state.salaryTypeValue || (jobItem && jobItem.salary_type)}
                      onChange={(e) => this.setState({ salaryTypeValue: e.target.value })}
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
                        value={this.state.salaryStateValue || (jobItem && jobItem.salary_state)}
                        onChange={(e) => this.setState({ salaryStateValue: e.target.value })}
                      >
                        <option> Johor </option>
                        <option> Kedah </option>
                        <option> Kelantan </option>
                        <option> Kuala Lumpur </option>
                        <option> Labuan </option>
                        <option> Melaka </option>
                        <option> Negeri Sembilan </option>
                        <option> Pahang </option>
                        <option> Perak </option>
                        <option> Perlis </option>
                        <option> Pulau Pinang </option>
                        <option> Putrajaya </option>
                        <option> Sabah </option>
                        <option> Sarawak </option>
                        <option> Selangor </option>
                        <option> Terengganu </option>
                      </select>
                    </div>
                    <div className="EditAndPost-inputCity">
                      <input
                        className="EditAndPost-customInput"
                        placeholder="inputCity"
                        onFocus={() => this.setState({ focusOnCity: true })}
                        onBlur={() => this.setState({ focusOnCity: false })}
                        ref={(ref) => (this.city = ref)}
                        value={this.state.cityValue || (jobItem && jobItem.city)}
                        onChange={(e) => {
                          this.setState({ cityValue: e.target.value });
                          if (this.state.cityValue === '') {
                            jobItem.city = '';
                          }
                        }}
                      />
                    </div>
                    <div className={`${focusOnCity ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    { hasEditJob ? <div className="EditAndPost-buttonContainer">
                      <button
                        className="EditAndPost-buttonPreview"
                        onClick={() => window.history.back()}
                      >
                        <span className="EditAndPost-buttonPreviewText">
                          CANCEL
                        </span>
                      </button>
                      <button
                        className="EditAndPost-buttonPostjob"
                        onClick={() => this.setState({ buttonIsSubmited: 'Post' })}
                      >
                        <span className="EditAndPost-buttonPostjobText">
                          SAVE JOB
                        </span>
                      </button>
                    </div> : <div className="EditAndPost-buttonContainer">
                      <button
                        className="EditAndPost-buttonPreview"
                        onClick={() => this.setState({ buttonIsSubmited: 'Preview' })}
                      >
                        <span className="EditAndPost-buttonPreviewText">
                          Preview
                        </span>
                      </button>
                      <button
                        className="EditAndPost-buttonPostjob"
                        onClick={() => this.setState({ buttonIsSubmited: 'Post' })}
                      >
                        <span className="EditAndPost-buttonPostjobText">
                          Post job
                        </span>
                      </button>
                    </div> }
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
              <div id="EditAndPost-bottom">
                { hasJobSaved && <JobSavedAlert /> }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

