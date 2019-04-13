import React, { Component } from "react";
import FormRegister from "./FormRegister";
export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-offset-4">
            <FormRegister />
          </div>
        </div>
      </div>
    );
  }
}
