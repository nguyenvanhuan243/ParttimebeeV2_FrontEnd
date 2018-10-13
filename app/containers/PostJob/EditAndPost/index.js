import React, { Component } from 'react';
import Header from 'components/Header/Loadable';
import ImportantAlert from 'containers/PostJob/ImportantAlert/Loadable';
import JobSavedAlert from 'components/JobSavedAlert/Loadable';
import axios from 'axios';
import 'w3-css/w3.css';
import { convertFromHTML, ContentState, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { isEmpty } from 'lodash';
import config from '../../../../config';

const jobId = location.pathname.match(/\d+/) && location.pathname.match(/\d+/)[0];
const hasEditJob = location.search.includes('edit-job');
const currentUserUrl = `${config.API_BASE_URL}/users/${localStorage.currentUser}`;

export default class EditAndPost extends Component {
  constructor() {
    super();
    this.state = {
      jobItem: {},
      showAlert: true,
      hasJobSaved: false,
      focusOnCity: false,
      characterLeft: 45,
      focusOnTitle: false,
      focusOnSalary: false,
      focusOnCategory: false,
      focusOnSalaryType: false,
      focusOnSalaryState: false,
      focusOnDescription: false,
      descriptionCharacterLeft: 1000,
      cityValue: '',
      titleValue: '',
      CategoryValue: '',
      SalaryValue: '',
      SalaryTypeValue: '',
      salaryStateValue: '',
      buttonIsSubmited: 'Post',
      editorState: EditorState.createEmpty(),
    };
  }
  componentWillMount() {
    const requestUrl = `${config.API_BASE_URL}/jobs/${jobId}`;
    axios.get(currentUserUrl).then(response => {
      if (!response.data.contact_name || !response.data.company_name) {
        location.replace(`${config.BASE_URL}/myprofile/edit-profile`);
      }
    });
    axios.get(requestUrl).then(
      response => {
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

  onSubmit = e => {
    const {
      buttonIsSubmited,
    } = this.state;
    e.preventDefault();
    if (hasEditJob) {
      document.getElementById('EditAndPost-bottom').scrollIntoView(true);
      const url = `${config.API_BASE_URL}/jobs/${jobId}`;
      this.setState({ hasJobSaved: !this.state.hasJobSaved });
      axios.put(url, {
        city: this.city.value,
        title: this.title.value,
        salary: this.salary.value,
        category: this.category.value,
        salaryType: this.salaryType.value,
        salaryState: this.salaryState.value,
        description: this.description.editor.innerHTML,
      });
    } else {
      const url = `${config.API_BASE_URL}/jobs`;
      axios.post(url, {
        city: this.city.value,
        title: this.title.value,
        salary: this.salary.value,
        category: this.category.value,
        user_id: localStorage.currentUser,
        salaryType: this.salaryType.value,
        salaryState: this.salaryState.value,
        button_is_submited: buttonIsSubmited,
        description: this.description.editor.innerHTML,
      }).then(response => {
        location.replace(`${config.BASE_URL}/job-detail/${response.data.id}?${buttonIsSubmited === 'Preview' ? 'preview&' : ''}created&`);
      });
    }
  }

  render() {
    const {
      jobItem,
      cityValue,
      titleValue,
      hasJobSaved,
      focusOnCity,
      salaryValue,
      focusOnTitle,
      focusOnSalary,
      characterLeft,
      focusOnCategory,
      salaryStateValue,
      focusOnSalaryType,
      focusOnSalaryState,
      focusOnDescription,
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
                        required
                        maxLength="45"
                        placeholder="Title"
                        className="EditAndPost-customInput"
                        ref={ref => (this.title = ref)}
                        onChange={e => {
                          this.setState({
                            titleValue: e.target.value,
                            characterLeft: (45 - e.target.value.length),
                          });
                          if (isEmpty(titleValue)) {
                            jobItem.title = '';
                          }
                        }}
                        value={titleValue || (jobItem && jobItem.title)}
                        onFocus={() => this.setState({ focusOnTitle: true })}
                        onBlur={() => this.setState({ focusOnTitle: false })}
                      />
                    </div>
                    <div className={`${focusOnTitle ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}>
                      <span className="EditAndPost-characterLeft">
                        { characterLeft }
                      </span>
                    </div>
                    <div className="selectParent">
                      <select
                        ref={ref => (this.category = ref)}
                        onFocus={() => this.setState({ focusOnCategory: true })}
                        onBlur={() => this.setState({ focusOnCategory: false })}
                        onChange={e => this.setState({ CategoryValue: e.target.value })}
                        value={this.state.CategoryValue || (jobItem && jobItem.category)}
                        className={`${focusOnCategory ? 'EditAndPost-inputCategorySelected' : 'EditAndPost-inputCategory'}`}
                      >
                        <option> Select a category </option>
                        <option> Event & Exhibition </option>
                        <option> Education </option>
                        <option> Retails & Sales </option>
                        <option> Food & Beverages </option>
                        <option> Administrative </option>
                        <option> Others </option>
                      </select>
                    </div>
                    <div className="EditAndPost-inputDescription">
                      <Editor
                        editorState={this.state.editorState}
                        editorClassName="EditAndPost-editor"
                        wrapperClassName="EditAndPost-wrapper"
                        editorRef={ref => (this.description = ref)}
                        onFocus={() => this.setState({ focusOnDescription: true })}
                        onBlur={() => this.setState({ focusOnDescription: false })}
                        onEditorStateChange={editorState => this.setState({
                          editorState,
                          descriptionCharacterLeft: (1001 - this.description.editor.innerText.length),
                        })}
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
                    <div className={`${focusOnDescription ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}>
                      <span className="EditAndPost-characterLeft">
                        { this.state.descriptionCharacterLeft }
                      </span>
                    </div>
                    <div className="EditAndPost-inputSalary">
                      <input
                        required
                        type="number"
                        placeholder="RM19.00"
                        className="EditAndPost-customInput"
                        ref={ref => (this.salary = ref)}
                        onFocus={() => this.setState({ focusOnSalary: true })}
                        onBlur={() => this.setState({ focusOnSalary: false })}
                        value={salaryValue || (jobItem && jobItem.salary)}
                        onChange={e => {
                          this.setState({ salaryValue: e.target.value });
                          if (isEmpty(salaryValue)) {
                            jobItem.salary = '';
                          }
                        }}
                      />
                    </div>
                    <div className={`${focusOnSalary ? 'EditAndPost-separateActive' : 'EditAndPost-separate'}`}></div>
                    <div className="selectParent">
                      <select
                        ref={ref => (this.salaryType = ref)}
                        onFocus={() => this.setState({ focusOnSalaryType: true })}
                        onBlur={() => this.setState({ focusOnSalaryType: false })}
                        onChange={e => this.setState({ salaryTypeValue: e.target.value })}
                        value={this.state.salaryTypeValue || (jobItem && jobItem.salary_type)}
                        className={`${focusOnSalaryType ? 'EditAndPost-inputSalaryTypeSelected' : 'EditAndPost-inputSalaryType'}`}
                      >
                        <option> Select salary type </option>
                        <option> Per hour </option>
                        <option> Per day </option>
                        <option> Per month </option>
                      </select>
                    </div>
                    <div className="selectParent">
                      <select
                        ref={ref => (this.salaryState = ref)}
                        onFocus={() => this.setState({ focusOnSalaryState: true })}
                        onBlur={() => this.setState({ focusOnSalaryState: false })}
                        onChange={e => this.setState({ salaryStateValue: e.target.value })}
                        value={salaryStateValue || (jobItem && jobItem.salary_state)}
                        className={`${focusOnSalaryState ? 'EditAndPost-inputSalaryStateSelected' : 'EditAndPost-inputSalaryState'}`}
                      >
                        <option> Select state </option>
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
                        ref={ref => (this.city = ref)}
                        className="EditAndPost-customInput"
                        value={cityValue || (jobItem && jobItem.city)}
                        onFocus={() => this.setState({ focusOnCity: true })}
                        onBlur={() => this.setState({ focusOnCity: false })}
                        onChange={e => {
                          this.setState({ cityValue: e.target.value });
                          if (isEmpty(cityValue)) {
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

