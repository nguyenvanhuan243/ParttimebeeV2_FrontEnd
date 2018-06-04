import React, { PureComponent } from 'react';
import RelatedJobItem from 'components/JobDetail/RelatedJobList/RelatedJobItem/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class RelatedJobList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { dataResourceEndPoint: [] };
  }
  componentWillMount() {
    const url = `${config.API_BASE_URL}/jobs?limit=5`;
    axios.get(url).then((response) => {
      this.setState({ dataResourceEndPoint: response.data });
    });
  }
  renderRelatedJob() {
    const { dataResourceEndPoint = [] } = this.state;
    const lastElement = dataResourceEndPoint[dataResourceEndPoint.length - 1];
    return dataResourceEndPoint.map((item) => <RelatedJobItem showSeparate={item !== lastElement} href={`${config.BASE_URL}/job-detail/${item.id}`} title={item.title} companyName={item.companyName} />);
  }
  render() {
    return (
      <div>
        <div className="RelatedJobList-Title"> RELATED JOBS </div>
        <div className="RelatedJobList"> { this.renderRelatedJob() } </div>
      </div>
    );
  }
}
