import React from 'react';
import { Redirect } from 'react-router-dom';

const fullnameRegexp = new RegExp('[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3}');
const cpfRegexp = new RegExp('^([0-9]){3}.([0-9]){3}.([0-9]){3}-([0-9]){2}$');
const emailRegexp = new RegExp('\\S+@\\S+\\.\\S+');
const phoneRegexp = new RegExp('\\d{2}\\s\\d{4,5}\\-\\d{4}$');
const cepRegexp = new RegExp('[0-9]{5}-[0-9]{3}$');
const addressRegxp = new RegExp('[a-zA-Z0-9 ,.]{10}');

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      method: 'credito',
      fulled: false,

    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handle = this.handle.bind(this);
  }

  componentDidMount() {
    this.getItemLocalStorage();
  }

  handleCheck() {
    const { fullname, email, cpf, phone, cep, address, method } = this.state;
    if (fullnameRegexp.test(fullname) && cpfRegexp.test(cpf) && emailRegexp.test(email)
    && phoneRegexp.test(phone) && cepRegexp.test(cep) && addressRegxp.test(address)
    && method !== '') {
      this.setState({ fulled: true });
    } else {
      this.setState({ fulled: false });
    }
  }

  getItemLocalStorage = () => {
    const getProducts = { ...localStorage };
    const arrayOfproducts = Object.values(getProducts).map((e) => JSON.parse(e));

    this.setState({
      products: arrayOfproducts,
    });
  }

  handle({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { fulled, products, fullname, email, cpf, phone, cep, address } = this.state;

    if (fulled) {
      return <Redirect to="/" />;
    }

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
              {
                Math.round(products.reduce((a, c) => a + (c.counter * c.price), 0) * 100)
                / 100
              }
            </p>
          </fieldset>
          <fieldset>
            <legend><h2>Informações do comprador</h2></legend>
            <input
              name="fullname"
              value={ fullname }
              data-testid="checkout-fullname"
              type="text"
              maxLength="50"
              pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}"
              title="Mínimo de três caracteres"
              placeholder="fullname"
              onChange={ this.handle }
            />
            <input
              name="email"
              value={ email }
              data-testid="checkout-email"
              type="text"
              pattern="\S+@\S+\.\S+"
              title="Formato: alguém@algo.algo"
              placeholder="E-mail"
              maxLength="50"
              onChange={ this.handle }
            />
            <input
              name="cpf"
              value={ cpf }
              data-testid="checkout-cpf"
              type="text"
              pattern="^([0-9]){3}.([0-9]){3}.([0-9]){3}-([0-9]){2}$"
              title="Formato: 000.000.000-00"
              placeholder="CPF"
              maxLength="14"
              onChange={ this.handle }
            />
            <input
              name="phone"
              value={ phone }
              data-testid="checkout-phone"
              type="text"
              pattern="(\d{2})\s(\d{4,5})-(\d{4})"
              title="00 0000-0000 ou 00 00000-0000"
              placeholder="Phone Number"
              maxLength="14"
              onChange={ this.handle }
            />
            <input
              name="cep"
              value={ cep }
              data-testid="checkout-cep"
              type="text"
              pattern="[0-9]{5}-[0-9]{3}$"
              title="Formato: 00000-000"
              minLength="9"
              maxLength="9"
              placeholder="CEP"
              onChange={ this.handle }
            />
            <input
              name="address"
              value={ address }
              data-testid="checkout-address"
              type="text"
              pattern="[a-zA-Z0-9 '-/(/)]{10,}"
              title="Mínimo de 10 caracteres"
              maxLength="50"
              placeholder="Address"
              onChange={ this.handle }
            />
          </fieldset>
          <fieldset>
            <legend><h2>Método de pagamento</h2></legend>
            <input
              name="method"
              type="radio"
              value="credito"
              onChange={ this.handle }
              checked
            />
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
