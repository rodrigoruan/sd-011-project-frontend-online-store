import React from 'react';
import PropTypes from 'prop-types';
import CardCreator from './CardCreator';
import './CardList.css';

export default class CardList extends React.Component {
  render() {
    const { list, getProductDetails, updateQuantityIcon } = this.props;
    return (
      <div className="card-list">
        {
          list === undefined
            ? <span>Nenhum produto foi encontrado</span>
            : list.map((produto, index) => (
              <CardCreator
                key={ index }
                product={ produto }
                getProductDetails={ getProductDetails }
                updateQuantityIcon={ updateQuantityIcon }
              />))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any),
  getProductDetails: PropTypes.func.isRequired,
  updateQuantityIcon: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  list: [],
};
