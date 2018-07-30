import React, { PureComponent, PropTypes } from 'react';
import CategoryItem from 'components/CategoryList/CategoryItem/Loadable';
import HomeIcon from 'components/Icons/Category/Home/Loadable';
import EventIcon from 'components/Icons/Category/Event/Loadable';
import EducationIcon from 'components/Icons/Category/Education/Loadable';
import RetailsIcon from 'components/Icons/Category/Retails/Loadable';
import FoodIcon from 'components/Icons/Category/Food/Loadable';
import AdministrativeIcon from 'components/Icons/Category/Administrative/Loadable';
import OthersIcon from 'components/Icons/Category/Others/Loadable';

export default class CategoryList extends PureComponent {
  constructor() {
    super();
    this.state = { selectedInput: 'Home' };
  }
  handleSelectedInput = (text) => {
    localStorage.setItem('selectedCategoryItem', text);
    this.setState({ selectedInput: text });
    this.props.onHandleSelectedCategory();
  }
  render() {
    const categoryList = [
      { text: 'Home', icon: <HomeIcon /> },
      { text: 'Event & Exhibition', icon: <EventIcon /> },
      { text: 'Education', icon: <EducationIcon /> },
      { text: 'Retails & Sales', icon: <RetailsIcon /> },
      { text: 'Food & Beverages', icon: <FoodIcon /> },
      { text: 'Administrative', icon: <AdministrativeIcon /> },
      { text: 'Others', icon: <OthersIcon /> },
    ];
    const CategoryArray = [];
    categoryList.map((item) => CategoryArray.push(<CategoryItem
      key={item.text.toString()}
      text={item.text}
      iconType={item.icon}
      onClickFunc={() => this.handleSelectedInput(item.text)}
      selected={this.state.selectedInput === item.text}
    />));
    return <div> { CategoryArray } </div>;
  }
}
CategoryList.propTypes = { onHandleSelectedCategory: PropTypes.func.isRequired };

