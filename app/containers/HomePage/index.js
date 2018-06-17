import React, { PureComponent } from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';
import JobList from 'components/JobList/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import CategoryList from 'components/CategoryList/Loadable';
import LoadingJobsList from 'components/LoadingJobs/LoadingJobsList/Loadable';
import SearchNotFound from 'components/SearchNotFound/Loadable';
import ReactLoading from 'react-loading';
import StateList from 'components/StateList/Loadable';
import axios from 'axios';
import config from '../../../config';

export default class HomePage extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      dataArray: [],
      filterLoading: false,
      selectedCategory: 'Home',
      selectedState: '',
    };
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
    setTimeout(
      () => this.setState({
        isLoading: true,
      }), 1000
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleChangeSelectedCategory() {
    this.setState({
      selectedCategory: localStorage.selectedCategoryItem,
    });
    this.setState({
      filterLoading: !this.state.filterLoading,
    });
    setTimeout(
      () => {
        this.setState({
          filterLoading: !this.state.filterLoading,
        });
      }, 1000
    );
    setTimeout(
      () => this.setState({
        isLoading: true,
      }), 1000
    );
  }

  handleSelectedState() {
    this.setState({
      selectedState: localStorage.selectedStateItem,
    });
    this.setState({
      filterLoading: !this.state.filterLoading,
    });
    setTimeout(
      () => {
        this.setState({
          filterLoading: !this.state.filterLoading,
        });
      }, 1000
    );
    setTimeout(
      () => this.setState({
        isLoading: true,
      }), 1000
    );
  }

  render() {
    const {
      dataArray = [],
      filterLoading,
      selectedCategory,
      selectedState,
    } = this.state;
    let dataFilted = [];
    dataFilted = dataArray.filter((item) => item.job_type === 'going');
    dataFilted = dataFilted.filter((item) => item.category === selectedCategory);
    if (selectedState) {
      dataFilted = dataFilted.filter((item) => item.salary_state === selectedState);
    }
    return (
      <div>
        <Header />
        <div className="HomePageContainer-reloading">
          { filterLoading && <ReactLoading
            type={'spokes'}
            height={50}
            width={50}
          /> }
        </div>
        <div className="HomePageContainer">
          <div className="HomePageContainer-categoryList">
            <CategoryList
              onHandleSelectedCategory={() => this.handleChangeSelectedCategory()}
            />
            <StateList onHandleSelectedState={() => this.handleSelectedState()} />
          </div>
          { (dataFilted.length === 0 && !filterLoading) ? <SearchNotFound /> : <div className="HomePageContainer-jobListContainer">
            { !filterLoading ? <JobList dataResourceEndPoint={dataFilted} /> : <div className="HomePageContainer-none" /> }
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
