import React, { PureComponent } from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';
import JobList from 'components/JobList/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import CategoryList from 'components/CategoryList/Loadable';
import LoadingJobsList from 'components/LoadingJobs/LoadingJobsList/Loadable';

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
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
      isLoading,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="HomePageContainer">
          <div className="HomePageContainer-categoryList">
            <CategoryList />
          </div>
          <div className="HomePageContainer-jobListContainer">
            <JobList />
            <JobList />
            <JobList />
            <JobList />
            { isLoading ? null : <LoadingJobsList /> }
          </div>
          <div className="HomePageContainer-sidebarContainer">
            <Subscribe />
            <Sponsored />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
