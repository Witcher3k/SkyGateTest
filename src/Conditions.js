import React from "react";

export default function conditions(value) {
  if (value === "Text") {
    return (
      <div className="row">
        <label className="col-xl-1 ">Condition</label>
        <select className="form-control col-xl-4 ">
          <option>Equals</option>
        </select>
        <input
          type="text"
          className="form-control col-xl-6 offset-xl-1"
          id="usr"
        />
      </div>
    );
  } else if (value === "Number") {
    return (
      <div className="row">
        <label className="col-xl-1">Condition</label>
        <select className="form-control col-xl-5">
          <option>Equals</option>
          <option>Greater than</option>
          <option>Less than</option>
        </select>
        <input type="text" className="form-control col-xl-6" id="usr" />
      </div>
    );
  } else if (value === "Yes/No") {
    return (
      <div className="row">
        <label className="col-xl-1 ">Condition</label>
        <select className="form-control col-xl-5">
          <option>Equals</option>
        </select>
        <select className="form-control col-xl-6">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    );
  }
}
