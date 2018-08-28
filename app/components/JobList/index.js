import React, { PureComponent, PropTypes } from 'react';
import JobItem from 'components/JobList/JobItem/Loadable';
import ShowMoreIcon from 'components/Icons/ShowMore/Loadable';
export default class JobList extends PureComponent {
  constructor() {
    super();
    this.state = { limit: 5, showMore: true };
  }
  setJobId(jobId) {
    const { onDeleteConfirmation = () => {} } = this.props;
    onDeleteConfirmation();
    localStorage.setItem('jobId', jobId);
  }
  handleShowMore(listFilterd) {
    this.setState({
      limit: listFilterd.length,
      showMore: false,
    });
  }
  render() {
    const {
      text = '',
      showHeading = false,
      title = 'Today, December 25',
      showView = true,
      showShare = true,
      showEdit = false,
      showDelete = false,
      showImage = true,
      jobType = 'going',
      dataResourceEndPoint = [],
      size = 580,
    } = this.props;
    const style = {
      width: size,
    };
    const { limit, showMore } = this.state;
    const hasMyjob = location.pathname.includes('myjobs');
    const hasProfile = location.pathname.includes('my-profile');
    const listItem = [];
    let listFilterd = [];
    if (hasMyjob || hasProfile) {
      listFilterd = dataResourceEndPoint.filter((item) => item.job_type === (jobType));
    } else {
      listFilterd = dataResourceEndPoint;
    }
    listFilterd.slice(0, limit).map((item) =>
      listItem.push(<JobItem
        key={item.id}
        href={`/job-detail/${item.id}`}
        title={item.title}
        showImage={showImage}
        onClickJobItem={() => this.setJobId(item.id)}
        onHoverJobItem={() => this.setJobId(item.id)}
        showDelete={showDelete}
        showEdit={showEdit}
        showView={showView}
        showShare={showShare}
        showCompanyName={!(hasProfile || hasMyjob)}
        viewNumber={item.views}
        jobId={item.id}
        state={item.salary_state}
        city={item.city}
        companyName={item.company_name}
        showCity={!hasMyjob && !hasProfile}
      />));
    return (
      <div>
        { showHeading && <div className="JobList-showHeading">{ text} </div> }
        <div style={style} className="JobList">
          <div className="JobList-title">
            <div className="JobList-titleText"> { title } </div>
          </div>
          { listItem }
          { listFilterd.length > 5 && showMore ?
            <button className="JobList-buttonContainer" onClick={() => this.handleShowMore(listFilterd)}>
              <div className="JobList-showMore">
                <ShowMoreIcon />
                <div className="JobList-showMoreText"> SHOW {listFilterd.length - 5} MORE </div>
              </div>
            </button> : null }
        </div>
      </div>
    );
  }
}
JobList.propTypes = {
  text: PropTypes.string,
  showHeading: PropTypes.bool,
  title: PropTypes.string,
  showShare: PropTypes.bool,
  showView: PropTypes.bool,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  showImage: PropTypes.bool,
  onDeleteConfirmation: PropTypes.func,
  jobType: PropTypes.string,
  dataResourceEndPoint: PropTypes.array.isRequired,
  size: PropTypes.number,
};
