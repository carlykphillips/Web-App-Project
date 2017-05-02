import React, { Component } from 'react';
import './App.css';

class FoodTable extends Component {

  renderItems(){
  let  logs = this.props.state.log;
  let items = logs.map((log) => {log.food});
  console.log(logs)
  }



  render() {


    console.log("hello",this.props.state.log[0].food)
    return (
      <div>Food Chart
      <tbody>{this.renderItems()}</tbody>
      <td><button>Delete</button></td>
      </div>
  );
  }
}


export default FoodTable;
