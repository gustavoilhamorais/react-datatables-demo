import React, { Component } from 'react';
import axios from 'axios';


const $ = require('jquery');
$.DataTable = require('datatables.net');

export default class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      todos: []
    }

  }

  async componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/todos';

    try {
      const todos = await axios.get(url);

      await this.setState({ todos: todos.data });
      
      await $('#tabela').DataTable({
        data: this.state.todos,
        columns: [
          { data: 'id', title: 'id' },
          { data: 'title', title: 'Title' },
          { data: "completed", title: 'Completed' }
        ]
      });

    } catch(err) { console.log(err) }
  }

  render(){
    return(
      <div className="container">
        <h1>DataTables</h1>
        <table className="table" id="tabela">
        </table>
      </div>
    );
  }
}
