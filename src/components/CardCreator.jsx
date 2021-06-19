import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './styles/CardCreator.css';

class CardCreator extends Component {
  constructor(props) {
    super(props);

    this.createCard = this.createCard.bind(this);
  }

  createCard(item, onClick, to) {
    const {
      title,
      thumbnail,
      price,
      shipping: { free_shipping: freeShipping },
    } = item;
    return (
      <Card style={{ width: '18rem', height: '25rem' }}>
        <Link data-testid="product-detail-link" to={to}>
          <Card.Img variant="top" src={thumbnail} style={{ width: '8rem', height: '10rem' }} />
        </Link>
        <Card.Body style={{ overflow: 'hidden' }}>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{`R$ ${price}`}</Card.Subtitle>
          {freeShipping ? (
            <p data-testid="free-shipping"> Frete Grátis </p>
          ) : undefined}
        </Card.Body>
        <Card.Body>
          <Button variant="warning" onClick={onClick}>
            Adicione ao carrinho
          </Button>
        </Card.Body>
      </Card>
    );
  }

  render() {
    const { item, onClick, to } = this.props;
    return this.createCard(item, onClick, to);
  }
}

CardCreator.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardCreator;
