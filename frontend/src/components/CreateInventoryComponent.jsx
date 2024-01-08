import React, { Component } from "react";
import './createinventory.css';
import InventoryService from "../services/InventoryService";

class CreateInventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      judul_buku: "",
      jumlah: 0,
      nama_peminjam: "",
      alamat_peminjam: "",
      noHp_peminjam: "",
      tanggal_pinjam: "",
      tanggal_pengembalian: "",
      lama_pinjam: "",
    };

    this.changeJudulBuku = this.changeJudulBuku.bind(this);
    this.changeJumlah = this.changeJumlah.bind(this);
    this.changeNamaPeminjam = this.changeNamaPeminjam.bind(this);
    this.changeAlamatPeminjam = this.changeAlamatPeminjam.bind(this);
    this.changeNoHpPeminjam = this.changeNoHpPeminjam.bind(this);
    this.changeTanggalPinjam = this.changeTanggalPinjam.bind(this);
    this.changeTanggalPengembalian = this.changeTanggalPengembalian.bind(this);
    this.changeLamaPinjam = this.changeLamaPinjam.bind(this);
    this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      InventoryService.getBookById(this.state.id).then((res) => {
        let book = res.data;
        this.setState({
          judul_buku: book.judul_buku,
          jumlah: book.jumlah,
          nama_peminjam: book.nama_peminjam,
          alamat_peminjam: book.alamat_peminjam,
          noHp_peminjam: book.noHp_peminjam,
          tanggal_pinjam: book.tanggal_pinjam,
          tanggal_pengembalian: book.tanggal_pengembalian,
          lama_pinjam: book.lama_pinjam,
        });
      });
    }
  }

  saveOrUpdateBook = (e) => {
    e.preventDefault();
  
    // Check if required fields are filled
    if (
      !this.state.judul_buku ||
      this.state.jumlah <= 0 ||
      !this.state.nama_peminjam ||
      !this.state.alamat_peminjam ||
      !this.state.noHp_peminjam ||
      !this.state.tanggal_pinjam ||
      !this.state.tanggal_pengembalian ||
      !this.state.lama_pinjam
    ) {
      alert("Please fill out the fields.");
      return;
    }
  
    let book = {
      judul_buku: this.state.judul_buku,
      jumlah: this.state.jumlah,
      nama_peminjam: this.state.nama_peminjam,
      alamat_peminjam: this.state.alamat_peminjam,
      noHp_peminjam: this.state.noHp_peminjam,
      tanggal_pinjam: this.state.tanggal_pinjam,
      tanggal_pengembalian: this.state.tanggal_pengembalian,
      lama_pinjam: this.state.lama_pinjam,
    };
  
    if (this.state.id === "_add") {
      InventoryService.createBook(book).then((res) => {
        this.props.history.push("/success-page", {
          message: "Success! Data Successfully Added.",
          redirectTo: "/books",
        });
      });
    } else {
      InventoryService.updateBook(book, this.state.id).then((res) => {
        this.props.history.push("/success-page", {
          message: "Success! Data Successfully Updated.",
          redirectTo: "/books",
        });
      });
    }
  };

  changeJudulBuku = (event) => {
    this.setState({ judul_buku: event.target.value });
  };

  changeJumlah = (event) => {
    this.setState({ jumlah: parseInt(event.target.value) });
  };

  changeNamaPeminjam = (event) => {
    this.setState({ nama_peminjam: event.target.value });
  };

  changeAlamatPeminjam = (event) => {
    this.setState({ alamat_peminjam: event.target.value });
  };

  changeNoHpPeminjam = (event) => {
    this.setState({ noHp_peminjam: event.target.value });
  };

  changeTanggalPinjam = (event) => {
    this.setState({ tanggal_pinjam: event.target.value });
  };

  changeTanggalPengembalian = (event) => {
    this.setState({ tanggal_pengembalian: event.target.value });
  };

  changeLamaPinjam = (event) => {
    this.setState({ lama_pinjam: event.target.value });
  };

  cancel() {
    this.props.history.push("/books");
  }

  getTitle() {
    return this.state.id === "_add" ? (
      <h1 className="ttl">Add Book</h1>
    ) : (
      <h1 className="ttl">Update Book</h1>
    );
  }

  incrementJumlah = () => {
    this.setState((prevState) => ({ jumlah: prevState.jumlah + 1 }));
  };

  decrementJumlah = () => {
    this.setState((prevState) => ({
      jumlah: Math.max(prevState.jumlah - 1, 0),
    }));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="roww">
            <div className="card">
              {this.getTitle()}

              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Book Title</label>
                    <br></br>
                    <input
                      name="judul_buku"
                      className="form-control"
                      value={this.state.judul_buku}
                      onChange={this.changeJudulBuku}
                    />
                  </div>
                  
                  <div className="form-group">
                    <div className="num">
                      <label>Amount</label>
                      <br></br>
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button
                            type="button"
                            className="btn btn-default decrement"
                            key="decrement"
                            onClick={this.decrementJumlah}
                          >
                            -
                          </button>
                        </span>
                        <input
                          type="number"
                          name="jumlah"
                          className="form-controll"
                          value={this.state.jumlah}
                          onChange={this.changeJumlah}
                          min="0"
                        />
                        <span className="input-group-btn">
                          <button
                            type="button"
                            className="btn btn-default increment"
                            key="increment"
                            onClick={this.incrementJumlah}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Borrower's Name</label>
                    <br></br>
                    <input
                      name="nama_peminjam"
                      className="form-control"
                      value={this.state.nama_peminjam}
                      onChange={this.changeNamaPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label>Borrower's Address</label>
                    <br></br>
                    <input
                      name="alamat_peminjam"
                      className="form-control"
                      value={this.state.alamat_peminjam}
                      onChange={this.changeAlamatPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label>Borrower's Phone Number</label>
                    <br></br>
                    <input
                      name="noHp_peminjam"
                      className="form-control"
                      value={this.state.noHp_peminjam}
                      onChange={this.changeNoHpPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label>Borrow Date</label>
                    <br></br>
                    <input
                      type="date"
                      name="tanggal_pinjam"
                      className="form-control"
                      value={this.state.tanggal_pinjam}
                      onChange={this.changeTanggalPinjam}
                    />
                  </div>
                  <div className="form-group">
                    <label>Return Date</label>
                    <br></br>
                    <input
                      type="date"
                      name="tanggal_pengembalian"
                      className="form-control"
                      value={this.state.tanggal_pengembalian}
                      onChange={this.changeTanggalPengembalian}
                    />
                  </div>
                  <div className="form-group">
                    <label>Loan Period</label>
                    <br></br>
                    <input
                      name="lama_pinjam"
                      className="form-control"
                      value={this.state.lama_pinjam}
                      onChange={this.changeLamaPinjam}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateBook}
                  >
                    Save
                  </button>

                  <button
                    style={{ marginLeft: '14px' }}
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateInventoryComponent;
