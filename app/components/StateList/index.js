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
import KualaLumpurIcon from 'components/Icons/State/KualaLumpur/Loadable';
import SelangorIcon from 'components/Icons/State/Selangor/Loadable';
import JohorIcon from 'components/Icons/State/Johor/Loadable';
import MelakaIcon from 'components/Icons/State/Melaka/Loadable';
import NegeriIcon from 'components/Icons/State/Negeri/Loadable';
export default class StateList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="StateList-title">
          BROWSE STATES
        </div>
        <div className="StateList">
          <CategoryItem text="Kuala Lumpur" iconType={<KualaLumpurIcon />} />
          <CategoryItem text="Selangor" iconType={<SelangorIcon />} />
          <CategoryItem text="Johor" iconType={<JohorIcon />} />
          <CategoryItem text="Melaka" iconType={<MelakaIcon />} />
          <CategoryItem text="Negeri Sembilan" iconType={<NegeriIcon />} />
        </div>
      </div>
    );
  }
}

