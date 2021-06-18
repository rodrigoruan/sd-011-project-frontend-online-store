import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

const starID = 'data-star-id';

class StarRating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      selection: 0,
    };
  }

  hoverOver = (event) => {
    let value = 0;

    if (event) value = parseInt(event.target.getAttribute(starID), 10);

    this.setState({
      selection: value,
    });
  };

  setRating = (stars) => {
    this.setState({
      rating: parseInt(stars, 10),
    });
  }

  rate = (e) => {
    const stars = e.target.getAttribute(starID);
    this.setRating(stars);
    // console.log(e.target.getAttribute(starID));
    const { handleChange } = this.props;
    handleChange({
      target: {
        name: 'stars',
        value: parseInt(stars, 10),
      },
    });
  }

  render() {
    const { rating, selection } = this.state;

    return (
      <div
        className="rating-stars"
        onMouseOut={ () => this.hoverOver(null) }
        onBlur={ () => this.hoverOver(null) }
        onClick={ (e) => this.rate(e) }
        onKeyUp={ (e) => this.rate(e) }
        onMouseOver={ this.hoverOver }
        onFocus={ this.hoverOver }
        role="button"
        tabIndex={ 0 }
        value={ rating }
      >
        {Array.from({ length: 5 }, (_element, index) => (
          <Star
            starId={ index + 1 }
            key={ `star_${index + 1}` }
            marked={ selection ? selection >= index + 1 : rating >= index + 1 }
          />
        ))}
      </div>
    );
  }
}

StarRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default StarRating;
