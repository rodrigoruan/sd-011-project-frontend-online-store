import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruckPickup,
  faTractor,
  faPizzaSlice,
  faDog,
  faRecordVinyl,
  faPaintBrush,
  faBaby,
  faAirFreshener,
  faChild,
  faShoePrints,
  faCamera,
  faCar,
  faHome,
  faMobileAlt,
  faHardHat,
  faBlender,
  faHeadphones,
  faFutbol,
  faTools,
  faBirthdayCake,
  faGamepad,
  faSign,
  faIndustry,
  faMouse,
  faTicketAlt,
  faGuitar,
  faClock,
  faBook,
  faMusic,
  faFirstAid,
  faUsersCog,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';
import { getCategories } from '../services/api';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      request: [],
    };
    this.filterProducts = this.filterProducts.bind(this);
  }

  componentDidMount() {
    this.filterProducts();
  }

  async filterProducts() {
    const request = await getCategories();
    this.setState({
      request,
    });
  }

  render() {
    const { request } = this.state;
    const { onClick } = this.props;
    const icons = {
      faTruckPickup,
      faTractor,
      faPizzaSlice,
      faDog,
      faRecordVinyl,
      faPaintBrush,
      faBaby,
      faAirFreshener,
      faChild,
      faShoePrints,
      faCamera,
      faCar,
      faHome,
      faMobileAlt,
      faHardHat,
      faBlender,
      faHeadphones,
      faFutbol,
      faTools,
      faBirthdayCake,
      faGamepad,
      faSign,
      faIndustry,
      faMouse,
      faTicketAlt,
      faGuitar,
      faClock,
      faBook,
      faMusic,
      faFirstAid,
      faUsersCog,
      faCertificate,
    };
    return (
      <div className="filterArea">
        <ul aria-hidden="true" onClick={ onClick } className="categories">
          {request.map((req, index) => (
            <li data-testid="category" id={ req.id } key={ index } className="Category">
              <FontAwesomeIcon className="icon" icon={ Object.values(icons)[index] } />
              {req.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Filter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Filter;
