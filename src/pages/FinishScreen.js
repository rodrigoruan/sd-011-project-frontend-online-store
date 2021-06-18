import React, { Component } from 'react';
import PaymentMethod from '../components/PaymentMethod';
import Assessment from '../components/Assessment';
import BuyerInformation from '../components/BuyerInformation'

export default class FinishScreen extends Component {
    render() {
        return (
            <div>
                <Assessment />           
                <PaymentMethod />
                <BuyerInformation />
            </div>
        )
    }
}

