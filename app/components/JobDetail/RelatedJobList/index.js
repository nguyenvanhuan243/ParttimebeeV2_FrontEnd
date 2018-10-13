import React, { PureComponent } from 'react';
import Item from 'components/JobDetail/RelatedJobList/Item/Loadable';
import axios from 'axios';
import config from '../../../../config';

export default class RelatedJobList extends PureComponent {
  constructor() {
    super();
    this.state = { dataResourceEndPoint: [] };
  }

  componentWillMount() {
    axios.get(`${config.API_BASE_URL}/jobs?limit=5`).then(response => {
      this.setState({ dataResourceEndPoint: response.data });
    });
  }

  changeSpaceToPlus = title => title.split(' ').join('+');

  handleRelatedJobItem(item) {
    location.replace(`${config.BASE_URL}/job-detail/${item.id}?${this.changeSpaceToPlus(item.title)}`);
  }

  renderRelatedJob() {
    const { dataResourceEndPoint = [] } = this.state;
    const lastElement = dataResourceEndPoint[dataResourceEndPoint.length - 1];
    return dataResourceEndPoint.map(item => (
      <Item
        key={item.id}
        showSeparate={item !== lastElement}
        href={() => this.handleRelatedJobItem(item)}
        title={item.title}
        companyName={item.company_name}
        changePaddingTop={item.id === dataResourceEndPoint[0].id}
        changePaddingBottom={item.id === lastElement.id}
      />)
    );
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
