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
import { groupBy, values } from 'lodash';
import ScrollEvent from 'react-onscroll';
import moment from 'moment';
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
      limit: 2,
      scrollLoadingJob: false,
      arrayLength: 0,
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
    this.handleLoading();
  }

  handleScroll = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setTimeout(
        () => {
          this.setState({
            limit: this.state.limit + 2,
            scrollLoadingJob: true,
            arrayLength: this.state.limit,
          });
        }, 1000,
      );
    }
  }

  handleLoading() {
    setTimeout(
      () => this.setState({
        isLoading: true,
      }), 300
    );
  }
  handleFilterLoading() {
    setTimeout(
      () => {
        this.setState({
          filterLoading: !this.state.filterLoading,
        });
      }, 300
    );
  }

  handleChangeSelectedCategory() {
    this.setState({
      selectedCategory: localStorage.selectedCategoryItem,
    });
    this.setState({
      filterLoading: !this.state.filterLoading,
    });
    this.handleFilterLoading();
    this.handleLoading();
  }

  handleScrollCallback = () => {
    this.handleScroll();
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
      }, 500
    );
    this.handleLoading();
  }

  renderAfterGroupBy(object) {
    return values(object).map((item, index) => (
      this.state.limit > index ? <JobList
        key={index.toString()}
        title={moment(item[0].created_at).format('dddd, MMMM DD')}
        dataResourceEndPoint={item}
      /> : null
    ));
  }

  render() {
    const {
      dataArray = [],
      filterLoading,
      selectedCategory,
      selectedState,
      scrollLoadingJob,
      arrayLength,
    } = this.state;
    let dataFiltered = [];
    dataFiltered = dataArray.filter((item) => item.job_type === 'going');
    dataFiltered = dataFiltered.filter((item) => item.category === selectedCategory);
    if (selectedState) {
      dataFiltered = dataFiltered.filter((item) => item.salary_state === selectedState);
    }
    const groupByCreatedAt = groupBy(dataFiltered,
      (itemFiltered) => itemFiltered.created_at.substring(0, 10));
    const loadingLimited = arrayLength >= values(groupByCreatedAt).length;
    return (
      <div>
        <Header />
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
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
          { (dataFiltered.length === 0 && !filterLoading) ? <SearchNotFound /> : <div className="HomePageContainer-jobListContainer">
            { !filterLoading ?
              <span>
                { this.renderAfterGroupBy(groupByCreatedAt) }
              </span> :
              <div className="HomePageContainer-none" /> }
            { scrollLoadingJob && !loadingLimited ? <LoadingJobsList /> : null }
          </div> }
          <div className="HomePageContainer-sidebarContainer">
            <Subscribe /> <Sponsored /> <Footer />
          </div>
        </div>
      </div>
    );
  }
}
