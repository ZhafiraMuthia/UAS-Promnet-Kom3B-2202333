import React, { Component } from 'react';
import './deletepg.css';
import InventoryService from '../services/InventoryService';

class DeletePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleDelete = () => {
    const { id, redirectTo } = this.props.location.state;
    
    InventoryService.deleteBook(id)
      .then((res) => {
        this.props.history.push(redirectTo);
      });
  };

  handleCancel = () => {
    const { redirectTo } = this.props.location.state;
    this.props.history.push(redirectTo);
  };

  render() {
    return (
      <div className="cc">
        <div className="confirmation-content">
          <h2>Are you sure you want to delete this data?</h2>
          
          <button onClick={this.handleDelete} className="delete-btn">
            Delete
          </button>

          <button onClick={this.handleCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default DeletePage;
