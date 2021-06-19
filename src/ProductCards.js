import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   const { produto } = this.props;
  //   this.state = {
  //     product: produto,
  //   };
  //   this.addCommentaries = this.addCommentaries.bind(this);
  // }

  // componentDidMount() {
  // }

  // addCommentaries(commentaries) {
  //   const { produto } = this.props;
  //   produto.avaliacoes = commentaries;
  //   this.setState({
  //     product: produto,
  //   });
  // }

  render() {
    const { produto: { title, thumbnail, price, id }, addProduct } = this.props;
    return (
      <fragment>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            data: title,
          // funcao: this.addCommentaries,
          // teste: avaliacoes, // passando as avaliacoes para o details
          } }
        >
          <div data-testid="product" className="product">
            <h3>{ title }</h3>
            <img className="product-img" width="100px" src={ thumbnail } alt={ title } />
            <p className="price">
              Preço: R$
              { price }
            </p>
          </div>
        </Link>
        <button data-testid="product-detail-add-to-cart" type="button" onClick={ () => addProduct(title, thumbnail, price) }>Adicionar ao Carrinho</button>
      </fragment>
    );
  }
}

ProductCard.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
