import React, { Component } from "react";
import api from "../../api/register";
import { Link, withRouter } from "react-router-dom";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      checkbox: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const {name, email, checkbox, password } = this.state;

      try {
        await api.post("/users/create", { name, email, checkbox, password });
        this.props.history.push("/");
        
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    } 


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, password, checkbox } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">CADASTRAR</h1>
        <form className="form-group" onSubmit={this.onSubmit} method="post">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group" style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              className="form-control text-left"
              checked={checkbox}
              onChange={evt => {this.setState({checkbox: !checkbox})}}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="CADASTRAR"
              className="btn btn-primary btn-small"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(FormRegister)