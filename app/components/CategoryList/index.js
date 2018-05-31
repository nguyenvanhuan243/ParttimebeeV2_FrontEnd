import React, { PureComponent } from 'react';
import CategoryItem from 'components/CategoryList/CategoryItem/Loadable';
import HomeIcon from 'components/Icons/Category/Home/Loadable';
import EventIcon from 'components/Icons/Category/Event/Loadable';
import EducationIcon from 'components/Icons/Category/Education/Loadable';
import RetailsIcon from 'components/Icons/Category/Retails/Loadable';
import FoodIcon from 'components/Icons/Category/Food/Loadable';
import AdministrativeIcon from 'components/Icons/Category/Administrative/Loadable';
import OthersIcon from 'components/Icons/Category/Others/Loadable';
import StateList from 'components/StateList/Loadable';
import classNames from 'classnames';

export default class CategoryList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      hasSticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const el = document.getElementsByClassName('HomePageContainer-categoryList')[0];
      const sticky = el.offsetTop;
      if (window.pageYOffset >= sticky) {
        this.setState({
          hasSticky: true,
        });
      } else {
        this.setState({
          hasSticky: false,
        });
      }
    });
  }
  render() {
    const {
      hasSticky,
    } = this.state;
    const CategoryListClass = classNames({
      'CategoryList-sticky': hasSticky,
    });
    return (
      <div className={CategoryListClass}>
        <CategoryItem text="Home" iconType={<HomeIcon />} />
        <CategoryItem text="Event" iconType={<EventIcon />} />
        <CategoryItem text="Education" iconType={<EducationIcon />} />
        <CategoryItem text="Retails" iconType={<RetailsIcon />} />
        <CategoryItem text="Food" iconType={<FoodIcon />} />
        <CategoryItem text="Administrative" iconType={<AdministrativeIcon />} />
        <CategoryItem text="Others" iconType={<OthersIcon />} />
        <StateList />
      </div>
    );
  }
}

