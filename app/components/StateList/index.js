import React, { PureComponent } from 'react';
import ShowMoreIcon from 'components/Icons/ShowMore/Loadable';
import CategoryItem from 'components/CategoryList/CategoryItem/Loadable';
import KualaLumpurIcon from 'components/Icons/State/KualaLumpur/Loadable';
import JohorIcon from 'components/Icons/State/Johor/Loadable';
import MelakaIcon from 'components/Icons/State/Melaka/Loadable';
import NegeriIcon from 'components/Icons/State/Negeri/Loadable';
import SelangorIcon from 'components/Icons/State/Selangor/Loadable';
import SarawakIcon from 'components/Icons/State/Sarawak/Loadable';
import PutrajayaIcon from 'components/Icons/State/Putrajaya/Loadable';
import KedahIcon from 'components/Icons/State/Kedah/Loadable';
import KelantanIcon from 'components/Icons/State/Kelantan/Loadable';
import PahangIcon from 'components/Icons/State/Pahang/Loadable';
import LabuanIcon from 'components/Icons/State/Labuan/Loadable';
import PerakIcon from 'components/Icons/State/Perak/Loadable';
import PerlisIcon from 'components/Icons/State/Perlis/Loadable';
import PenangIcon from 'components/Icons/State/Penang/Loadable';
import TerengganuIcon from 'components/Icons/State/Terengganu/Loadable';
import SabahIcon from 'components/Icons/State/Sabah/Loadable';
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
      showMore: false,
    };
  }
  handleShowMore() {
    const {
      showMore,
    } = this.state;
    if (showMore) {
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
        showMore: !this.state.showMore,
      });
    } else {
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
          {
            text: 'Putrajaya',
            iconType: <PutrajayaIcon />,
          },
          {
            text: 'Kedah',
            iconType: <KedahIcon />,
          },
          {
            text: 'Kelantan',
            iconType: <KelantanIcon />,
          },
          {
            text: 'Pahang',
            iconType: <PahangIcon />,
          },
          {
            text: 'Labuan',
            iconType: <LabuanIcon />,
          },
          {
            text: 'Perak',
            iconType: <PerakIcon />,
          },
          {
            text: 'Perlis',
            iconType: <PerlisIcon />,
          },
          {
            text: 'Penang',
            iconType: <PenangIcon />,
          },
          {
            text: 'Terengganu',
            iconType: <TerengganuIcon />,
          },
          {
            text: 'Sabah',
            iconType: <SabahIcon />,
          },
          {
            text: 'Sarawak',
            iconType: <SarawakIcon />,
          },
        ],
        showMore: !this.state.showMore,
      });
    }
  }
  render() {
    const {
      limit,
      showMore,
    } = this.state;
    const listStateArray = [];
    limit.map((item) => listStateArray.push(<CategoryItem
      key={item.text}
      text={item.text}
      iconType={item.iconType}
    />));
    return (
      <div>
        <div className="StateList-title">
          BROWSE STATES
        </div>
        <div>
          { listStateArray }
          <button className="StateList-button" onClick={() => this.handleShowMore()}>
            <div className="StateList-buttonContainer">
              <ShowMoreIcon marginTop={7} />
              <div className="StateList-buttonText">
                { showMore ? 'VIEW LESS' : 'VIEW MORE...' }
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

