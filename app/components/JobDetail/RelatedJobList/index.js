import React, { PureComponent } from 'react';
import Item from 'components/JobDetail/RelatedJobList/Item/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class RelatedJobList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { dataResourceEndPoint: [] };
  }
  componentWillMount() {
    axios.get(`${config.API_BASE_URL}/jobs?limit=5`).then((response) => {
      this.setState({ dataResourceEndPoint: response.data });
    });
  }
  renderRelatedJob() {
    const { dataResourceEndPoint = [] } = this.state;
    const lastElement = dataResourceEndPoint[dataResourceEndPoint.length - 1];
    return dataResourceEndPoint.map((item) => <Item showSeparate={item !== lastElement} href={`${config.BASE_URL}/job-detail/${item.id}`} title={item.title} companyName={item.companyName} />);
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
