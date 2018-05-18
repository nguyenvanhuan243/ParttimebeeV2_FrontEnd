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
import ShowMoreIcon from 'components/Icons/ShowMore/Loadable';
export default class StateList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      limit: [
        {
          text: 'Kuala Lumpur',
          iconType: <KualaLumpurIcon />,
        },
        {
          text: 'Selangor',
          iconType: <JohorIcon />,
        },
        {
          text: 'Johor',
          iconType: <JohorIcon />,
        },
      ],
    };
  }
  handleShowMore() {
    this.setState({
      limit: [
        {
          text: 'Kuala Lumpur',
          iconType: <KualaLumpurIcon />,
        },
        {
          text: 'Selangor',
          iconType: <SelangorIcon />,
        },
        {
          text: 'Johor',
          iconType: <JohorIcon />,
        },
        {
          text: 'Melaka',
          iconType: <MelakaIcon />,
        },
        {
          text: 'Negeri',
          iconType: <NegeriIcon />,
        },
      ],
    });
  }
  render() {
    const {
      limit,
    } = this.state;
    const listItem = [];
    limit.map((item) => listItem.push(<CategoryItem text={item.text} iconType={item.iconType} />));
    return (
      <div>
        <div className="StateList-title">
          BROWSE STATES
        </div>
        <div className="StateList">
          { listItem }
          {/* <CategoryItem text="Kuala Lumpur" iconType={<KualaLumpurIcon />} />
          <CategoryItem text="Selangor" iconType={<SelangorIcon />} />
          <CategoryItem text="Johor" iconType={<JohorIcon />} />
          <CategoryItem text="Melaka" iconType={<MelakaIcon />} />
          <CategoryItem text="Negeri Sembilan" iconType={<NegeriIcon />} /> */}
          <button className="StateList-button" onClick={() => this.handleShowMore()}>
            <div className="StateList-buttonContainer">
              <div className="StateList-showMoreIcon">
                <ShowMoreIcon />
              </div>
              <div className="StateList-buttonText">
                VIEW MORE...
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

