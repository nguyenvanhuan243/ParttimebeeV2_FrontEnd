import React, { PureComponent, PropTypes } from 'react';
import JobItem from 'components/JobList/JobItem/Loadable';
import ShowMoreIcon from 'components/Icons/ShowMore/Loadable';
import axios from 'axios';
import config from '../../../config';
export default class JobList extends PureComponent {
  constructor() {
    super();
    this.state = { dataResourceEndPoint: [], limit: 5 };
  }
  componentWillMount() {
    const hasMyjob = location.pathname.includes('myjobs');
    const hasProfile = location.pathname.includes('my-profile');
    const currentUser = localStorage.currentUser;
    const url = `${config.API_BASE_URL}/jobs`;
    const urlCurrentUser = `${config.API_BASE_URL}/users/${currentUser}/jobs`;
    const urlRequest = (currentUser && (hasMyjob || hasProfile)) ? urlCurrentUser : url;
    axios.get(urlRequest).then((res) => {
      this.setState({ dataResourceEndPoint: res.data });
    });
  }
  handleShowMore(listFilterd) {
    this.setState({ limit: listFilterd.length });
  }
  render() {
    const {
      text = '',
      showHeading = false,
      title = 'Today, December 25',
      showCity = true,
      showView = true,
      showShare = true,
      showEdit = false,
      showDelete = false,
      showImage = true,
      onDeleteConfirmation = () => {},
      jobType = 'going',
    } = this.props;
    const { dataResourceEndPoint = [], limit } = this.state;
    const hasMyjob = location.pathname.includes('myjobs');
    const hasProfile = location.pathname.includes('my-profile');
    const listItem = [];
    let listFilterd = [];
    if (hasMyjob || hasProfile) {
      listFilterd = dataResourceEndPoint.filter((item) => item.type_job === (jobType));
    } else {
      listFilterd = dataResourceEndPoint;
    }
    listFilterd.slice(0, limit).map((item) =>
      listItem.push(<JobItem
        key={item.id}
        href={`${config.BASE_URL}/job-detail/${item.id}`}
        title={item.title}
        showImage={showImage}
        onClickJobItem={onDeleteConfirmation}
        showDelete={showDelete}
        showEdit={showEdit}
        showView={showView}
        showShare={showShare}
        showCity={showCity}
      />));
    return (
      <div>
        { showHeading && <div className="JobList-showHeading">{ text} </div> }
        <div className="JobList">
          <div className="JobList-title">
            <div className="JobList-titleText"> { title } </div>
          </div>
          { listItem }
          <button className="JobList-buttonContainer" onClick={() => this.handleShowMore(listFilterd)}>
            <div className="JobList-showMore">
              <ShowMoreIcon />
              <div className="JobList-showMoreText"> SHOW 88 MORE </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
JobList.propTypes = {
  text: PropTypes.string,
  showHeading: PropTypes.bool,
  title: PropTypes.string,
  showCity: PropTypes.bool,
  showShare: PropTypes.bool,
  showView: PropTypes.bool,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  showImage: PropTypes.bool,
  onDeleteConfirmation: PropTypes.func,
  jobType: PropTypes.string,
};
