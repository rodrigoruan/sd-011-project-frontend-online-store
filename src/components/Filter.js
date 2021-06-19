import React from 'react';
import PropTypes from 'prop-types';
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

    return (
      <div className="filterArea">
        <ul aria-hidden="true" onClick={ onClick }>
          {request.map((req, index) => (
            <li data-testid="category" id={ req.id } key={ index } className="Category">
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
