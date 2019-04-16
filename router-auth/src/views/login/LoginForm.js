import React, { Component } from "react";
import api from "../../api/register";
import { login } from "../../services/auth";
import { Link, withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;

    try {
        const response = await api.post("/users/login", { email, password });
        login(response.data.token);
        this.props.history.push("/app");

      } catch (err) {
        console.log(err)
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
  }

}

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, email, password } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1 className="text-center">Login</h1>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.onChange}
            className="input form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
            className="input form-control"
          />
        </div>
        <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg">
            Logar
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm)