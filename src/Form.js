import React, { Component } from "react";
import ReactDOM from "react-dom";
import conditions from "./Conditions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Text", subFormList: [] };
  }
  checkInput(event) {
    this.setState({ value: event.target.value });
  }
  addSubForm() {
    this.setState(
      {
        subFormList: [
          ...this.state.subFormList,
          {
            value: this.state.value,
            key: new Date().getTime(),
            remove: this.remove.bind(this)
          }
        ]
      },
      () => {
        console.log(this.state.subFormList);
        // debugger;
        // let temp = this.state.subFormList;
        //  let data = JSON.parse(localStorage.getItem("saveData"));
        //  localStorage.setItem("saveData", JSON.stringify(data));
        //  console.log(localStorage.getItem("saveData"));
      }
    );
  }
  remove(e) {
    //e.preventDefault();
    let arr = Object.assign([], this.state.subFormList);
    arr.pop();
    this.setState({ subFormList: arr });
    if (this.state.subFormList.length === 0) {
      this.props.remove();
    }
  }

  render() {
    return (
      <div style={{ marginLeft: 25 }} className="forms">
        <form action="">
          {conditions(this.props.value)}
          <div className="row">
            <label className="col-xl-1">Question</label>
            <input type="text" className="form-control col-xl-11" />
          </div>

          <div className="row">
            <label className="col-xl-1">Type</label>
            <select
              value={this.state.value}
              onChange={this.checkInput.bind(this)}
              className="form-control col-xl-11"
            >
              <option value="Number">Number</option>
              <option value="Text">Text</option>
              <option value="Yes/No">Yes/No</option>
            </select>
          </div>

          <button
            onClick={this.addSubForm.bind(this)}
            type="button"
            className="btn btn-primary"
          >
            Add Sub-input
          </button>
          <button
            onClick={this.remove.bind(this)}
            className="btn btn-primary"
            type="button"
          >
            Delete
          </button>
        </form>
        {this.state.subFormList.map(ele => (
          <Form
            key={ele.key}
            value={ele.value}
            remove={this.remove.bind(this)}
            datakey={ele.key}
          />
        ))}
      </div>
    );
  }
}

export default Form;
