import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class CategoriesBar extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
    };
    this.handleFetch = this.handleFetch.bind(this);
    this.renderCategorie = this.renderCategorie.bind(this);
  }

  componentDidMount() {
    this.handleFetch();
  }

  async handleFetch() {
    this.setState({
      loading: true,

    }, async () => {
      const { functionHome } = this.props;
      const reponse = await functionHome();
      this.setState({
        loading: false,
        categories: reponse,
      });
    });
  }

  renderCategorie() {
    const { categories } = this.state;
    const { filterCategory } = this.props;
    return (
      <ul>
        {
          categories.map((category) => (
            <button
              onClick={ filterCategory }
              type="submit"
              data-testid="category"
              key={ category.id }
              id={ category.id }
            >
              {category.name}
            </button>
          ))
        }
      </ul>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <h1>Categorias</h1>
        { loading ? <Loading /> : this.renderCategorie() }
      </div>
    );
  }
}

CategoriesBar.propTypes = {
  functionHome: PropTypes.string,
}.isRequired;

export default CategoriesBar;
