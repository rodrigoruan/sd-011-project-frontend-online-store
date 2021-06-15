import React, { Component } from 'react'
import  '../services/api'

export default class listproductterms extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        
        event.preventDefault();
      }

      render() {
        return (
          <form >
            <label>
              <input type="text" data-testid='query-input' value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" data-testid='query-button' value="Enviar" onClick={this.handleSubmit}/>
          </form>
        );
      }
    }

