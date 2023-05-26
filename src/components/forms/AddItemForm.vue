<template>
    <div class="container">
        <div class="tambah-barang">
        <h3 class="title">Tambah Barang</h3>
        <form @submit.prevent="submitForm">
            <div class="form-group">
            <label for="nama-barang">Nama barang</label>
            <input type="text" id="nama-barang" placeholder="Masukan Nama Barang" v-model="namaBarang" required>
            </div>
            <div class="form-group">
            <label for="harga-barang">Harga Barang</label>
            <input type="number" id="harga-barang" placeholder="Masukan Harga Barang" v-model="hargaBarang" required>
            </div>
            <div class="form-group">
            <label for="stok-barang">Stok barang</label>
            <input type="number" id="stok-barang" placeholder="Masukan Jumlah Stok Barang" v-model="stokBarang" required>
            </div>
            <div class="form-group">
            <label for="supplier-barang">Supplier barang</label>
            <input type="text" id="supplier-barang" v-model="supplierBarang" required>
            </div>
            <div class="button-group">
            <button class="btn-cancel" @click="cancelForm">Kembali</button>
            <button type="submit" class="btn-submit">Submit</button>
            </div>
        </form>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        namaBarang: '',
        hargaBarang: '',
        stokBarang: '',
        supplierBarang: ''
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        // You can access the form data through the component's data properties (e.g., this.namaBarang, this.hargaBarang, etc.)
        // Perform necessary actions such as sending data to a server or updating the state
        console.log('Form submitted');
      },
      cancelForm() {
        // Handle cancel form action (e.g., navigate back or reset form)
        console.log('Form canceled');
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }

  .tambah-barang {
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    width: 50%;
    min-width: 50rem;
  }
  
  .title {
    margin: 0 0 10px;
    padding: 1rem;
    text-align: left;
    color: #6394c7;
    background-color: #b8dcfe;
  }
  
  .form-group {
    display: flex;
    flex-direction: row;
    margin: 0 1rem 1rem 1rem;
    width: 95%;
    align-items: center;
  }
  
  label {
    text-align: left;
    display: flex;
    width: 150px;
    font-weight: bold;
  }
  
  input {
    width: 80%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button-group {
    border-top: #ddd 2px solid;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 1rem 1rem;
  }
  
  .btn-cancel,
  .btn-submit {
    margin-top: 1rem;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-cancel {
    background-color: #6c747d;
    color: #fff;
  }
  
  .btn-submit {
    background-color: #6394c7;
    color: #fff;
  }
  
  /* Add your own styles as needed */
  </style>
  
