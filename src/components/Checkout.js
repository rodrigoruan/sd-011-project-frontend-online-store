import React from 'react';

const fullnameRegex = new RegExp('[a-z]+$');

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      // form: {
      //   fullname: '',
      //   email: '',
      //   cpf: null,
      //   phone: null,
      //   cep: null,
      //   address: '',
      //   method: '',
      // },
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      method: '',
      fulled: false,

    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handle = this.handle.bind(this);
  }

  componentDidMount() {
    this.getItemLocalStorage();
  }

  componentDidUpdate() { // Só pra testar
    // console.log('Estado form mudando abaixo');
    // console.log(this.state.form);
    console.log('componentDidupdate: Estado fulled mudando abaixo');
    console.log(this.state.fulled);
    console.log('componentDidupdate: onChange muda Estado como abaixo');
    // console.log(this.state.form);
    console.log(this.state);
  }

  handleCheck() {
    // const { form: { fullname, email, cpf, phone, cep, address, method } } = this.state;
    const { fullname, email, cpf, phone, cep, address, method } = this.state;
    // && () && (phone !== null)
    // && (cep !== null) && (address !== '') && (method !== ''))
    if (fullnameRegex.test(fullname) && email !== '' && cpf !== '' && phone !== ''
    && cep !== '' && address !== '' && method !== '') {
      this.setState({ fulled: true });
      console.log('Nome ok');
    } else {
      console.log('Nome errado');
      this.setState({ fulled: false });
    }
  }

  getItemLocalStorage = () => {
    const getProducts = { ...localStorage };
    const arrayOfproducts = Object.values(getProducts).map((e) => JSON.parse(e));

    this.setState({
      products: arrayOfproducts,
      // count: arrayOfproducts.map(({ counter, title }) => ({ counter, title })),
    });
  };

  // fullname() {
  //   const { form: { fullname } } = this.state;

  //   // this.setState({ fulled: true }) :
  //   // this.setState({ fulled: false });
  // }

  // emailValid() {
  //   const { form: { email } } = this.state;
  // }

  // cpf() {
  //   const { form: { cpf } } = this.state;
  // }

  // phone() {
  //   const { form: { phone } } = this.state;
  // }

  // cep() {
  //   const { form: { cep } } = this.state;
  // }

  // address() {
  //   const { form: { address } } = this.state;
  // }

  // method() {
  //   const { form: { method } } = this.state;
  // }

  handle({ target }) {
    // this.setState({ form: { [target.name]: target.value } });
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { products } = this.state;
    // const { form: { fullname, email, cpf, phone, cep, address } } = this.state;
    const { fullname, email, cpf, phone, cep, address, method } = this.state;
    return (
      <div>
        <h1>Dados de compra</h1>
        <form>
          <fieldset>
            <legend><h2>Revise seus produtos</h2></legend>
            <ul>
              {products.map(({ title, price, id, counter }) => (
                <li key={ id }>
                  <h3>{title}</h3>
                  <p>
                    Valor unitário: R$
                    {price}
                  </p>
                  <p>
                    Qtd.:
                    {counter}
                  </p>
                  <p>
                    Valor por item: R$
                    {counter * price}
                  </p>
                </li>
              ))}
            </ul>
            <p>
              TOTAL DA COMPRA: R$
              {products.reduce((acc, curr) => acc + (curr.counter * curr.price), 0)}
            </p>
          </fieldset>
          <fieldset>
            <legend><h2>Informações do comprador</h2></legend>
            <input
              name="fullname"
              required
              value={ fullname }
              data-testid="checkout-fullname"
              type="text"
              pattern="[a-z\s]+$"
              title="Só letras minúsculas entre a e z"
              placeholder="fullname"
              onChange={ this.handle }
            />
            <input
              name="email"
              value={ email }
              data-testid="checkout-email"
              type="email"
              placeholder="E-mail"
              onChange={ this.handle }
            />
            <input
              name="cpf"
              value={ cpf }
              data-testid="checkout-cpf"
              type="text"
              placeholder="cpf"
              onChange={ this.handle }
            />
            <input
              name="phone"
              value={ phone }
              data-testid="checkout-phone"
              type="text"
              placeholder="phone"
              onChange={ this.handle }
            />
            <input
              name="cep"
              value={ cep }
              data-testid="checkout-cep"
              type="text"
              placeholder="cep"
              onChange={ this.handle }
            />
            <input
              name="address"
              value={ address }
              data-testid="checkout-address"
              type="text"
              placeholder="Address"
              onChange={ this.handle }
            />
          </fieldset>
          <fieldset>
            <legend><h2>Método de pagamento</h2></legend>
            <input name="method" type="radio" value="credito" onChange={ this.handle } />
            Cartão de Crédito
            <input name="method" type="radio" value="boleto" onChange={ this.handle } />
            Boleto
            <input name="method" type="radio" value="debito" onChange={ this.handle } />
            Débito
          </fieldset>
          <button type="button" onClick={ this.handleCheck }> FINALIZAR COMPRA</button>
        </form>
      </div>
    );
  }
}
