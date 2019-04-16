import React, { Component } from "react";
class Home extends Component {
  componentDidMount(){
    this.props.history.push('/home');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <h1>PAGINA HOME</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;