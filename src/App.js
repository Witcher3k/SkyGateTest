import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { FormList: [], counter: 0 };
  }
  addInput() {
    this.setState(
      {
        FormList: [
          ...this.state.FormList,
          {
            value: "",
            key: new Date().getTime(),
            arr: []
          }
        ]
      },
      () => {
        localStorage.setItem("saveData", JSON.stringify(this.state.FormList));
      }
    );
  }
  remove(e) {
    let arr = Object.assign([], this.state.FormList);
    arr.splice(-1, 1);
    this.setState({ FormList: arr }, () => {
      localStorage.setItem("saveData", JSON.stringify(this.state.FormList));
    });
  }
  getData() {
    //debugger;
    if (localStorage.getItem("saveData") !== null) {
      return JSON.parse(localStorage.getItem("saveData"));
    } else {
      return this.state.FormList;
    }
  }
  reaload() {
    window.onload = () => {
      {
        this.setState({
          FormList: this.getData()
        });
      }
    };
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.addInput.bind(this)} className="btn btn-primary">
          Add Input
        </button>
        {this.reaload()}
        {this.state.FormList.map(ele => (
          <Form
            key={ele.key}
            value={ele.value}
            remove={this.remove.bind(this)}
            datakey={ele.key}
          />
        ))}
        {console.log(this.getData())}
      </div>
    );
  }
}

export default App;
