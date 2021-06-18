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
            <input type="radio" />
            <img width="50px" src={ codebar } alt="checkout" />
            </div>

            <h4>Cartão de Crédito</h4>
            <div>
            <input type="radio" />
            Visa
            <img width="50px" src={ creditCard } alt="checkout" />

            <input type="radio" />
            MasterCard
            <img width="50px" src={ creditCard } alt="checkout" />

            <input type="radio" />
            Elo
            <img width="50px" src={ creditCard } alt="checkout" />
            </div>
      </div>
        )
    }
}
