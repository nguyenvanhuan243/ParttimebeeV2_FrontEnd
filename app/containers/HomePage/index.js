import React, { PureComponent } from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';
import JobList from 'components/JobList/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import CategoryList from 'components/CategoryList/Loadable';
import LoadingJobsList from 'components/LoadingJobs/LoadingJobsList/Loadable';
import SearchNotFound from 'components/SearchNotFound/Loadable';
import axios from 'axios';
import config from '../../../config';

export default class HomePage extends PureComponent {
  constructor() {
    super();
    this.state = { isLoading: false, dataArray: [] };
  }

  componentWillMount() {
    const queryString = location.search.substring(8);
    let url = '';
    if (queryString) {
      url = `${config.API_BASE_URL}/searches?search=${queryString}`;
    } else {
      url = `${config.API_BASE_URL}/jobs`;
    }
    axios.get(url).then((response) => this.setState({
      dataArray: response.data,
    }));
  }

  componentDidMount() {
    const pageHeight = document.documentElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && (document.documentElement.scrollTop || 0));
    window.addEventListener('scroll', () => {
      if (pageHeight === windowHeight + scrollPosition) {
        setTimeout(
          () => this.setState({
            isLoading: true,
          }), 3000);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  render() {
    const {
      dataArray = [],
    } = this.state;
    const dataFilted = dataArray.filter((item) => item.job_type !== 'preview');
    return (
      <div>
        <Header />
        <div className="HomePageContainer">
          <div className="HomePageContainer-categoryList"> <CategoryList /> </div>
          { dataArray.length === 0 ? <SearchNotFound /> : <div className="HomePageContainer-jobListContainer">
            <JobList dataResourceEndPoint={dataFilted} />
            <JobList dataResourceEndPoint={dataFilted} />
            <JobList dataResourceEndPoint={dataFilted} />
            <JobList dataResourceEndPoint={dataFilted} />
            { this.state.isLoading ? null : <LoadingJobsList /> }
          </div> }
          <div className="HomePageContainer-sidebarContainer">
            <Subscribe /> <Sponsored /> <Footer />
          </div>
        </div>
      </div>
    );
  }
}
