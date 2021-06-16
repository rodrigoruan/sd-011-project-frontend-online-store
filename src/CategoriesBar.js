import React from 'react';
import Loading from './Loading';
import PropTypes from 'prop-types';

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
      const reponse = await this.props.functionHome();
      this.setState({
        loading: false,
        categories: reponse,
      });
    });
  }

  renderCategorie() {
    const { categories } = this.state;
    return (
      <ul>
        {
          categories.map((category) => (
            <li data-testid="category" key={ category.id }>
              {category.name}
            </li>
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
