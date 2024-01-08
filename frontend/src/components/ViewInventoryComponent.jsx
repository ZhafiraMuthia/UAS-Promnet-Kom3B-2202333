import React, { Component } from "react";
import './viewinventory.css';
import InventoryService from "../services/InventoryService";

class ViewInventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      book: {},
    };
  }

  componentDidMount() {
    InventoryService.getBookById(this.state.id).then((res) => {
      this.setState({ book: res.data });
    });

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="box">

          <h1 className="ttl">Book Details</h1>

          <div className="card-body">
            <table className="book-table">
              <tbody>
                <tr>
                  <td><strong>Judul Buku</strong></td>
                  <td>: {this.state.book.judul_buku}</td>
                </tr>
                <tr>
                  <td><strong>Jumlah</strong></td>
                  <td>: {this.state.book.jumlah}</td>
                </tr>
                <tr>
                  <td><strong>Nama Peminjam</strong></td>
                  <td>: {this.state.book.nama_peminjam}</td>
                </tr>
                <tr>
                  <td><strong>Alamat Peminjam</strong></td>
                  <td>: {this.state.book.alamat_peminjam}</td>
                </tr>
                <tr>
                  <td><strong>No. Handphone Peminjam</strong></td>
                  <td>: {this.state.book.noHp_peminjam}</td>
                </tr>
                <tr>
                  <td><strong>Tanggal Pinjam</strong></td>
                  <td>: {this.state.book.tanggal_pinjam}</td>
                </tr>
                <tr>
                  <td><strong>Tanggal Pengembalian</strong></td>
                  <td>: {this.state.book.tanggal_pengembalian}</td>
                </tr>
                <tr>
                  <td><strong>Lama Pinjam</strong></td>
                  <td>: {this.state.book.lama_pinjam}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewInventoryComponent;
