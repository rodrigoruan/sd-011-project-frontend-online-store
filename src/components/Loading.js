import React, { Component } from 'react';
import '../css/Section.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading" />
      </div>
    );
  }
}

export default Loading;
