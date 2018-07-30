import React, { PureComponent, PropTypes } from 'react';
import FoodIcon from 'components/Icons/Category/Food/Loadable';
import HomeIcon from 'components/Icons/Category/Home/Loadable';
import EventIcon from 'components/Icons/Category/Event/Loadable';
import OthersIcon from 'components/Icons/Category/Others/Loadable';
import RetailsIcon from 'components/Icons/Category/Retails/Loadable';
import EducationIcon from 'components/Icons/Category/Education/Loadable';
import CategoryItem from 'components/CategoryList/CategoryItem/Loadable';
import AdministrativeIcon from 'components/Icons/Category/Administrative/Loadable';

export default class CategoryList extends PureComponent {
  constructor() {
    super();
    this.state = { selectedInput: 'Home' };
  }
  handleSelectedInput = (text) => {
    this.props.onHandleSelectedCategory();
    this.setState({ selectedInput: text });
    localStorage.setItem('selectedCategoryItem', text);
  }
  render() {
    const categoryList = [
      { text: 'Home', icon: <HomeIcon /> },
      { text: 'Others', icon: <OthersIcon /> },
      { text: 'Education', icon: <EducationIcon /> },
      { text: 'Food & Beverages', icon: <FoodIcon /> },
      { text: 'Retails & Sales', icon: <RetailsIcon /> },
      { text: 'Event & Exhibition', icon: <EventIcon /> },
      { text: 'Administrative', icon: <AdministrativeIcon /> },
    ];
    const CategoryArray = [];
    categoryList.map((item) => CategoryArray.push(<CategoryItem
      text={item.text}
      iconType={item.icon}
      key={item.text.toString()}
      selected={this.state.selectedInput === item.text}
      onClickFunc={() => this.handleSelectedInput(item.text)}
    />));
    return <div> { CategoryArray } </div>;
  }
}
CategoryList.propTypes = { onHandleSelectedCategory: PropTypes.func.isRequired };

