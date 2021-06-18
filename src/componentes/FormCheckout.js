// import React, { Component } from 'react';
// import ProductDetails from './ProductDetails';

// class FormCheckout extends Component {
//   constructor() {
//     super()
//     this.state = {
//       fullname: '',
//       email: '',
//       cpf: '',
//       phone: '',
//       cep: '',
//       address: '',
//     }
//   }
//   render() {
//     const { fullname, email, cpf, phone, cep, address } = this.state;
//     return (
//       <form>
//         <fieldset>
//           <label>
//             Revise seus Produtos
//             <h4>Total:</h4>
//           </label>
//           <fieldset>
//             <h4>Informações do Comprador</h4>
//           <input data-testid="checkout-fullname" name="fullname" type="text" value={ fullname } placeholder="Nome Completo" />
//           <input data-testid="checkout-email" name="email" type="email" value={ email } placeholder="Email" />
//           <input data-testid="checkout-cpf" name="cpf" type="text" value={ cpf } placeholder="CPF" />
//           <input data-testid="checkout-phone" name="phone" type="text" value={ phone } placeholder="Telefone" />
//           <input data-testid="checkout-cep" name="cep" type="text" value={ cep } placeholder="CEP" />
//           <input data-testid="checkout-address" name="address" type="text" value={ address } placeholder="Endereço" />
//           </fieldset>
//         </fieldset>
//         <button type="button" data-testid="checkout-products">Comprar</button>
//       </form>
//     );
//   }
// }

// export default FormCheckout;