import React from 'react';
import PropTypes from 'prop-types';
import CardCreator from './cardCreator';

export default class CardList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list === undefined
            ? <span>Nenhum produto foi encontrado</span>
            : list.map((produto, index) => (
              <CardCreator
                key={ index }
                product={ produto }
              />))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};
