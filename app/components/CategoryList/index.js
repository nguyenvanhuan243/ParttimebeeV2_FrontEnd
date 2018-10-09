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
  handleSelectedInput = text => {
    const {
      onHandleSelectedCategory = () => {},
    } = this.props;
    localStorage.setItem('selectedCityItem', '');
    localStorage.setItem('selectedStateItem', '');
    localStorage.setItem('selectedCategoryItem', text);
    onHandleSelectedCategory();
    this.setState({ selectedInput: text });
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
    const { selectedInput } = this.state;
    categoryList.map(item => CategoryArray.push(<CategoryItem
      text={item.text}
      iconType={item.icon}
      key={item.text.toString()}
      selected={selectedInput === item.text}
      onClickFunc={() => this.handleSelectedInput(item.text)}
    />));
    return <div> { CategoryArray } </div>;
  }
}
CategoryList.propTypes = { onHandleSelectedCategory: PropTypes.func.isRequired };

