import React from 'react';

class CardItem extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: [],
  //   };

  //   this.handlerState = this.handlerState.bind(this);

  // }

  // componentDidMount() {
  //   this.handlerState();
  // }

  // async handlerState() {
  //   // const queryTerm =
  //   const response = await api.getProductsFromCategoryAndQuery().then();
  //   this.setState({
  //     products: response,
  //   });
  // }

  render() {
    const { products } = this.props;
    // const { title } = products;
    // const aguarde = (<p>Aguarde</p>);
    // const bom = (<p>Bom</p>);

    return products.map(({ title, thumbnail, price }) => {
      return (
        <div data-testid="product">
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title }/>
          <p>{price}</p>
        </div>
      );
    });
    // return products ? bom : ;
  }
}
export default CardItem;
