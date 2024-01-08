import React, { Component } from 'react';
import './successpg.css';

class SuccessPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { message, redirectTo } = this.props.location.state;

    return (
      <div className="sc">
        <div className="success-content">
          <h2>{message}</h2>
          <button onClick={() => this.props.history.push(redirectTo)}>
            Okay
          </button>
        </div>
      </div>
    );
  }
}

export default SuccessPage;
