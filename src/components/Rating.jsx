import React, { Component } from 'react'

export default class Rating extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="form-radio">
        <div className="form-check">
          <label htmlFor="1-star">
            1
            <input
              type="radio"
              value={ 1 }
              name="formStars"
              className="form-check-input"
              id="1-star"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="form-check">
          <label htmlFor="2-star">
            2
            <input
              type="radio"
              value={ 2 }
              name="formStars"
              className="form-check-input"
              id="2-star"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="form-check">
          <label htmlFor="3-star">
            3
            <input
              type="radio"
              value={ 3 }
              className="form-check-input"
              name="formStars"
              id="3-star"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="form-check">
          <label htmlFor="4-star">
            4
            <input
              type="radio"
              value={ 4 }
              name="formStars"
              className="form-check-input"
              id="4-star"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="form-check">
          <label htmlFor="5-star">
            5
            <input
              type="radio"
              value={ 5 }
              name="formStars"
              className="form-check-input"
              id="5-star"
              onChange={ handleChange }
            />
          </label>
        </div>
      </div>
    )
  }
}
