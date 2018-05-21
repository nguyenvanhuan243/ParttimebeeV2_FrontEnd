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

export default class CategoryList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="CategoryList">
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
