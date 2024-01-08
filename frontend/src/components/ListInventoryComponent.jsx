import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import './listinventory.css';
import InventoryService from '../services/InventoryService';

class ListInventoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: [],
      filteredBooks: [],
      searchQuery: '',
    };
  }

  componentDidMount() {
    this.fetchBooks();
    window.scrollTo(0, 0);
  }

  fetchBooks() {
    InventoryService.getBooks()
      .then((res) => {
        if (!res.data) {
          this.props.history.push('/add-book/_add');
        } else {
          const books = res.data;
          this.setState({
            allBooks: books,
            filteredBooks: books,
          });
        }
      });
  }

  addBook = () => {
    this.props.history.push('/add-book/_add');
  };

  deleteBook(id) {
    InventoryService.deleteBook(id)
      .then((res) => {
        const updatedBooks = this.state.allBooks.filter((book) => book.id !== id);
        this.setState({
          allBooks: updatedBooks,
          filteredBooks: updatedBooks,
        });
      });
  }

  viewBook = (id) => {
    this.props.history.push(`/view-book/${id}`);
  };

  editBook = (id) => {
    this.props.history.push(`/add-book/${id}`);
  };

  changeSearchQuery = (event) => {
    const { allBooks } = this.state;
    const searchQuery = event.target.value.toLowerCase();

    const filteredBooks = allBooks.filter((book) =>
      book.judul_buku.toLowerCase().includes(searchQuery) ||
      book.nama_peminjam.toLowerCase().includes(searchQuery)
    );

    this.setState({
      filteredBooks,
      searchQuery,
    });
  };

  render() {
    return (
      <div>
        <h1 className="ttlfirst" style={{ textAlign: 'center' }}>Book Borrowing List</h1>

        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn-add" onClick={this.addBook}>
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>

          <div className="search-container">
            <input
              className='search-things'
              type="text"
              placeholder="Search here..."
              value={this.state.searchQuery}
              onChange={this.changeSearchQuery}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>

        <div className="table-con">
        <div className="row">
          <table className="tables">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Amount</th>
                <th>Borrower</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Borrow Date</th>
                <th>Return Date</th>
                <th>Loan Period</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.judul_buku}</td>
                  <td><center>{book.jumlah}</center></td>
                  <td>{book.nama_peminjam}</td>
                  <td>{book.alamat_peminjam}</td>
                  <td><center>{book.noHp_peminjam}</center></td>
                  <td><center>{book.tanggal_pinjam}</center></td>
                  <td><center>{book.tanggal_pengembalian}</center></td>
                  <td><center>{book.lama_pinjam}</center></td>
                  <td>

                    <button
                      style={{ marginLeft: '10px', marginBottom: '5px' }}
                      onClick={() => this.editBook(book.id)}
                      className="btn-up"
                    >
                      <FontAwesomeIcon icon={faEdit} /> Update
                    </button>

                    <Link
                      to={{
                        pathname: `/delete-page/${book.id}`,
                        state: {
                          id: book.id,
                          redirectTo: '/books',
                        },
                      }}
                      className="btn-del-link"
                    >
                      <button
                        style={{ marginLeft: '10px', marginBottom: '5px' }}
                        className="btn-del"
                      >
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </button>
                    </Link>

                    <button
                      style={{ marginLeft: '10px'}}
                      onClick={() => this.viewBook(book.id)}
                      className="btn-info"
                    >
                      <FontAwesomeIcon icon={faEye} /> View
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>

      </div>
    );
  }
}

export default ListInventoryComponent;
