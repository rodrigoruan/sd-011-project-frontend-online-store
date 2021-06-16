import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <section>
          <div className="m-3 text-center about-div" fluid>
            <h2>This project was made by the Main-10-Group</h2>
            <h5>This application simulates an e-commerce shopping site </h5>
            <h5>Made by the following members: </h5>
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">Davi Marques</li>
              <li className="list-group-item list-group-item-action">Hugo Mouto</li>
              <li className="list-group-item list-group-item-action">Marcos Mantovani</li>
              <li className="list-group-item list-group-item-action">Nicolas Pereira</li>
              <li className="list-group-item list-group-item-action">PH Assis</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
