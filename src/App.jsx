import React from 'react';
import './App.css';
import React, { Component } from 'react'
import * as CRUD from '../services/api';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    CRUD.getCategories()
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

