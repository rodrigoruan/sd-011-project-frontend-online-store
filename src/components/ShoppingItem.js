import React, { Component } from 'react'

class ShoppingItem extends Component {
  constructor() {
    super()
    this.state = {
      counter: 1,
    }
    this.sumCounter = this.sumCounter.bind(this)
    this.minusCounter = this.minusCounter.bind(this)
    this.delete = this.delete.bind(this)
  }

  delete() {
    console.log('teste delete')
  }

  sumCounter() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    })
  }

  minusCounter() {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    })
  }

  render() {
    const { counter } = this.state;
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <div>
        <button type="button" onClick={ this.delete }>X</button>
        <img src={ thumbnail } alt={ title } width="20px" />
        <span>{ title }</span>
        <button type="button" onClick={ this.minusCounter }>-</button>
        <span>{ counter }</span>
        <button type="button" onClick={ this.sumCounter }>+</button>
        <span>
          R$
          { price }  
        </span>
      </div>
    )
  }
}

export default ShoppingItem
