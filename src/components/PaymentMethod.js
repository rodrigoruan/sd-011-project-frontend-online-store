import React, { Component } from 'react'
import codebar from '../imgs/codebar.jpg'
import creditCard from '../imgs/creditCard.jpg'

export default class PaymentMethod extends Component {
    render() {
        return (
        <div>
            <h3>Método de Pagamento</h3>
            <h4>Boleto</h4>
            <div>
            <label for="paymentmethod">
                <input name="paymentmethod" type="radio" />
                <img width="50px" src={ codebar } alt="checkout" />
            </label>
            </div>

            <h4>Cartão de Crédito</h4>
            <div>
            <label for="paymentmethod">
                Visa
                <input name="paymentmethod" type="radio" />
            </label>
            <img width="50px" src={ creditCard } alt="checkout" />

            <label for="paymentmethod">
                MasterCard
                <input name="paymentmethod" type="radio" />
            </label>
            <img width="50px" src={ creditCard } alt="checkout" />

            <label for="paymentmethod">
                Elo
                <input name="paymentmethod" type="radio" />
            </label>
            <img width="50px" src={ creditCard } alt="checkout" />
            </div>
      </div>
        )
    }
}
