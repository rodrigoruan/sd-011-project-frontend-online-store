import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
      <div>
        <section>
          <ul>Revise seus produtos</ul>
          {/* <li>produtos</li> */}
          <p>valor total da compra:</p>
        </section>
        <section>
          Informações do Comprador
          <br />
          <input type="text" data-testid="checkout-fullname" placeholder="Nome completo" />
          <input type="text" maxLength="11" min="0" data-testid="checkout-cpf" placeholder="CPF" />
          <input type="email" data-testid="checkout-email" placeholder="Email" />
          <input type="text" maxLength="11" min="0" data-testid="checkout-phone" placeholder="Telefone" />
          <br />
          <input type="text" maxLength="8" min="0" data-testid="checkout-cep" placeholder="CEP" />
          <input type="text" data-testid="checkout-address" placeholder="Endereço" />
          <br />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Cidade" />
          <select>
            <option hidden>Estado</option>
            <option>Acre (AC)</option>
            <option>Alagoas (AL)</option>
            <option>Amapá (AP)</option>
            <option>Amazonas (AM)</option>
            <option>Bahia (BA)</option>
            <option>Ceará (CE)</option>
            <option>Distrito Federal (DF)</option>
            <option>Espírito Santo (ES)</option>
            <option>Goiás (GO)</option>
            <option>Maranhão (MA)</option>
            <option>Mato Grosso (MT)</option>
            <option>Mato Grosso do Sul (MS)</option>
            <option>Minas Gerais (MG)</option>
            <option>Pará (PA)</option>
            <option>Paraíba (PB)</option>
            <option>Paraná (PR)</option>
            <option>Pernambuco (PE)</option>
            <option>Piauí (PI)</option>
            <option>Rio de Janeiro (RJ)</option>
            <option>Rio Grande do Norte (RN)</option>
            <option>Rio Grande do Sul (RS)</option>
            <option>Rondônia (RO)</option>
            <option>Roraima (RR)</option>
            <option>Santa Catarina (SC)</option>
            <option>São Paulo (SP)</option>
            <option>Sergipe (SE)</option>
            <option>Tocantins (TO)</option>
          </select>
        </section>
        <section>
          <br />
          Método de Pagamento
          <br />
          <label htmlFor="boleto">
            <input type="radio" id="boleto" />
            Boleto
          </label>
          <br />
          Cartão de Crédito:
          <br />
          <label htmlFor="creditCard">
            <span id="creditCard">
              <input type="radio" />
              Visa
              <input type="radio" />
              MasterCard
              <input type="radio" />
              Elo
            </span>
          </label>
          <br />
          <button type="button">Comprar</button>
        </section>
      </div>
    );
  }
}

export default Checkout;
