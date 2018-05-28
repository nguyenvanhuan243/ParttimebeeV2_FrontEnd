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

import React, { PureComponent, PropTypes } from 'react';
import JobItem from 'components/JobList/JobItem/Loadable';
import ShowMoreIcon from 'components/Icons/ShowMore/Loadable';
import axios from 'axios';
import config from '../../../config';
export default class JobList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      dataResourceEndPoint: [],
    };
  }
  componentWillMount() {
    const url = `${config.API_BASE_URL}/jobs`;
    axios.get(url).then((response) => {
      this.setState({
        dataResourceEndPoint: response.data,
      });
    });
  }
  handleShowMore() {
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
    } = this.props;
    const {
      dataResourceEndPoint = [],
    } = this.state;
    const listItem = [];
    dataResourceEndPoint.map((item) => listItem.push(<JobItem href={`${config.BASE_URL}/job-detail/${item.id}`} title={item.title} showImage={showImage} onClickJobItem={onDeleteConfirmation} showDelete={showDelete} showEdit={showEdit} showView={showView} showShare={showShare} showCity={showCity} />));
    return (
      <div>
        { showHeading ? <div className="JobList-showHeading">
          { text}
        </div> : null }
        <div className="JobList">
          <div className="JobList-title">
            <div className="JobList-titleText">
              { title }
            </div>
          </div>
          { listItem }
          <button className="JobList-buttonContainer" onClick={() => this.handleShowMore()}>
            <div className="JobList-showMore">
              <ShowMoreIcon />
              <div className="JobList-showMoreText">
                SHOW 88 MORE
              </div>
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
  onDeleteConfirmation: PropTypes.func.isRequired,
};
