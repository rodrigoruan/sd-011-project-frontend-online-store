import React, { Component } from 'react';
import PropTypes from 'prop-types';
import userimg from '../images/user.png';

export default class RenderComments extends Component {
  render() {
    const { comentario: { email, comment, rate } } = this.props;
    let starRate = '';
    switch (rate) {
    case '1':
      starRate = '★';
      break;
    case '2':
      starRate = '★★';
      break;
    case '3':
      starRate = '★★★';
      break;
    case '4':
      starRate = '★★★★';
      break;
    case '5':
      starRate = '★★★★★';
      break;
    default:
    }
    return (
      <div className="user-comment">
        <img src={ userimg } alt="User profile" className="user-img" />
        <div className="comment-info">
          <h4 className="comment-email">{ email }</h4>
          {/* <h5 className="comment-rate">{`Classificação: ${rate}`}</h5> */}
          <h5 className="comment-rate">{ starRate }</h5>
          <p className="comment-text">{ comment }</p>
        </div>
      </div>
    );
  }
}

RenderComments.propTypes = {
  comentario: PropTypes.shape({
    rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    email: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};
