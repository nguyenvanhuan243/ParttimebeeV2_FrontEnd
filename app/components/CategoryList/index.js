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
    localStorage.setItem('selectedCategoryItem', 'Home');
    this.state = {
      hasSticky: false,
      selectedInput: localStorage.selectedCategoryItem,
    };
  }

  handleSelectedInput = (text) => {
    localStorage.setItem('selectedCategoryItem', text);
    this.setState({
      selectedInput: localStorage.selectedCategoryItem,
    });
    this.props.onHandleSelectedCategory();
  }
  render() {
    const {
      selectedInput,
    } = this.state;
    const categoryList = [
      {
        text: 'Home',
        icon: <HomeIcon />,
      },
      {
        text: 'Event',
        icon: <EventIcon />,
      },
      {
        text: 'Education',
        icon: <EducationIcon />,
      },
      {
        text: 'Retails',
        icon: <RetailsIcon />,
      },
      {
        text: 'Food',
        icon: <FoodIcon />,
      },
      {
        text: 'Administrative',
        icon: <AdministrativeIcon />,
      },
      {
        text: 'Others',
        icon: <OthersIcon />,
      },
    ];
    const CategoryArray = [];
    categoryList.map((item) => CategoryArray.push(<CategoryItem
      key={item.text.toString()}
      text={item.text}
      iconType={item.icon}
      onClickFunc={() => this.handleSelectedInput(item.text)}
      selected={selectedInput === item.text}
    />));
    return (
      <div>
        { CategoryArray }
      </div>
    );
  }
}
CategoryList.propTypes = {
  onHandleSelectedCategory: PropTypes.func.isRequired,
};

