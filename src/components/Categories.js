import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // categories: [],
    };
    // this.renderCategories = this.renderCategories.bind(this);
  }

  // componentDidMount() {
  //   this.renderCategories();
  // }

  // async renderCategories() {
  //   const data = await api.getCategories();
  //   this.setState({
  //     categories: data,
  //   });
  // }

  render() {
    const { handleRadioClick } = this.props;
    const { categories } = this.props;
    return (
      <div className="categories">
        <h5>Categorias:</h5>
        {categories.map((el) => (
          <label key={ el.id } htmlFor={ el.id }>
            {el.name}
            <input
              key={ el.id }
              type="radio"
              id={ el.id }
              name="categories"
              data-testid="category"
              value={ el.id }
              onClick={ handleRadioClick }
            />
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  handleRadioClick: PropTypes.func,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

Categories.defaultProps = {
  handleRadioClick: {},
};

export default Categories;
