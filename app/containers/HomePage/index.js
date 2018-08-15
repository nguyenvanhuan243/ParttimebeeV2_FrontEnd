import React, { PureComponent } from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer/Loadable';
import JobList from 'components/JobList/Loadable';
import Subscribe from 'components/Subscribe/Loadable';
import Sponsored from 'components/Sponsored/Loadable';
import CategoryList from 'components/CategoryList/Loadable';
import LoadingJobsList from 'components/LoadingJobs/LoadingJobsList/Loadable';
import SearchNotFound from 'components/SearchNotFound/Loadable';
import StateList from 'components/StateList/Loadable';
import { groupBy, values } from 'lodash';
import ScrollEvent from 'react-onscroll';
import moment from 'moment';
import axios from 'axios';
import config from '../../../config';

const params = new URLSearchParams(location.search);
export default class HomePage extends PureComponent {
  constructor() {
    super();
    this.state = {
      limit: 2,
      dataArray: [],
      arrayLength: 0,
      selectedState: '',
      isLoading: false,
      mountLoading: false,
      readyToRender: false,
      filterLoading: false,
      scrollLoadingJob: false,
      selectedCategory: 'Home',
    };
  }
  componentWillMount() {
    // localStorage.setItem('selectedStateItem', '');
    const queryString = params.get('search');
    const url = `${config.API_BASE_URL}/${queryString ? `searches?search=${queryString}` : 'jobs'}`;
    axios.get(url).then(
      (response) => {
        this.setState({ dataArray: response.data });
        setTimeout(
          () => this.setState({ readyToRender: true }), 300
        );
      }
    );
    this.handleLoading();
    setTimeout(
      () => this.setState({ mountLoading: true }), 50
    );
  }

  handleScroll = () => {
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
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
        }, 10,
      );
    }
  }

  handleLoading() {
    setTimeout(
      () => this.setState({ isLoading: true }), 300
    );
  }
  handleFilterLoading() {
    setTimeout(
      () => {
        this.setState({ filterLoading: !this.state.filterLoading });
      }, 1000
    );
  }

  handleChangeSelectedCategory() {
    this.setState({
      selectedCategory: localStorage.selectedCategoryItem,
      filterLoading: !this.state.filterLoading,
    });
    this.handleFilterLoading();
    this.handleLoading();
    if (localStorage.selectedCategoryItem === 'Home') {
      location.replace(config.BASE_URL);
    }
  }

  handleScrollCallback = () => {
    this.handleScroll();
  }

  handleSelectedState() {
    this.setState({
      selectedState: localStorage.selectedStateItem,
      filterLoading: !this.state.filterLoading,
    });
    setTimeout(
      () => {
        this.setState({ filterLoading: !this.state.filterLoading });
      }, 500
    );
    this.handleLoading();
  }

  renderAfterGroupBy(object) {
    return values(object).map((item, index) => (
      this.state.limit > index && <JobList
        key={index.toString()}
        title={moment(item[0].created_at).format('dddd, MMMM DD')}
        dataResourceEndPoint={item}
      />
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
      readyToRender,
    } = this.state;
    let dataFiltered = [];
    dataFiltered = dataArray.filter((item) => item.job_type === 'going');
    if (selectedCategory !== 'Home') {
      dataFiltered = dataFiltered.filter((item) => item.category === selectedCategory);
    }
    if (selectedState) {
      dataFiltered = dataFiltered.filter((item) => item.salary_state === selectedState);
    }
    if (localStorage.selectedCityItem) {
      const selectedCityItem = localStorage.selectedCityItem;
      dataFiltered = dataFiltered.filter((item) => item.city === selectedCityItem);
    }
    if (localStorage.selectedStateItem) {
      const selectedStateItem = localStorage.selectedStateItem;
      dataFiltered = dataFiltered.filter((item) => item.salary_state === selectedStateItem);
    }
    const groupByCreatedAt = groupBy(dataFiltered,
      (itemFiltered) => itemFiltered.created_at.substring(0, 10));
    const loadingLimited = arrayLength >= values(groupByCreatedAt).length;
    return (
      <div>
        <Header />
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        <div className="HomePageContainer">
          <div className="HomePageContainer-categoryList">
            <CategoryList
              onHandleSelectedCategory={() => this.handleChangeSelectedCategory()}
            />
            <StateList onHandleSelectedState={() => this.handleSelectedState()} />
          </div>
          { (dataFiltered.length === 0 && !filterLoading && readyToRender) ? <SearchNotFound /> : <div className="HomePageContainer-jobListContainer">
            { filterLoading && <LoadingJobsList /> }
            { !readyToRender && <LoadingJobsList /> }
            { (!filterLoading && !localStorage.selectedCityItem && !localStorage.selectedStateItem && (localStorage.selectedCategoryItem !== 'Home')) &&
              <div className="HomePageContainer-jobBy">
                Jobs in {localStorage.selectedStateItem && `${localStorage.selectedStateItem} and`} {localStorage.selectedCategoryItem}
              </div> }
            { localStorage.selectedCityItem &&
              <div className="HomePageContainer-jobBy">
                Jobs in { localStorage.selectedCityItem }
              </div> }
            { localStorage.selectedStateItem &&
              <div className="HomePageContainer-jobBy">
                Jobs in { localStorage.selectedStateItem }
              </div> }
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
