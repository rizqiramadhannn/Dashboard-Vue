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
          <div class="dropdown">
            <input type="text" id="supplier-barang" v-model="selectedSupplier" @click="showSupplierList" required>
            <ul class="dropdown-list" v-show="showDropdown">
              <li v-for="supplier in listSupplier" :key="supplier.id" @click="selectSupplier(supplier)">{{ supplier.namaSupplier }}</li>
            </ul>
          </div>
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
      props: {
        itemsSupp: {
          type: Array,
          required: true
        }
      },
      computed: {
        token() {
          // Retrieve the token from the store if available
          let token = this.$store.getters.getToken;
          if (!token) {
            // If token is not available in the store, retrieve it from local storage
            token = localStorage.getItem('token');
          }
          return token;
        },
        listSupplier() {
          return this.$store.state.listSupplier;
        }
      },
      data() {
        return {
          namaBarang: '',
          hargaBarang: '',
          stokBarang: '',
          selectedSupplier: '',
          showDropdown: false,
          url: '',
        };
      },
      methods: {
        submitForm() {
            const formData = {
              namaBarang: this.namaBarang,
              hargaBarang: this.hargaBarang,
              stokBarang: this.stokBarang,
              supplierBarang: this.supplier
            };
    
            fetch(this.url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
              },
              body: JSON.stringify(formData)
            })
              .then(response => {
                if (response.ok) {
                  console.log('Form submitted successfully');
                  setTimeout(() => {
                    this.$router.push('/dashboard');
                  }, 1000);
                } else {
                  console.log('Form submission failed');
                }
              })
              .catch(error => {
                console.log('Network error:', error);
              });
        },
        cancelForm() {
          console.log('Form canceled');
          this.$router.go(-1);
        },
        resetForm() {
          this.namaBarang = '';
          this.hargaBarang = '';
          this.stokBarang = '';
          this.supplierBarang = '';
        },
        showSupplierList() {
          this.showDropdown = true;
        },
        selectSupplier(supplier) {
          this.selectedSupplier = supplier.namaSupplier;
          this.showDropdown = false;
          this.$emit('selectSupplier', supplier.namaSupplier);
        }
      },
      mounted() {
        console.log(this.$store.state.listSupplier);
        this.supplierList = this.$store.state.listSupplier
        if (
            this.namaBarang === '' &&
            this.hargaBarang === '' &&
            this.stokBarang === '' 
          ) {
            this.url = 'http://159.223.57.121:8090/barang/create'
          } else {
            this.url = 'editurl'
          }
          console.log(this.url)
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

  .dropdown {
  position: relative;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.dropdown-list li {
  padding: 8px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f1f1f1;
}

#supplier-barang {
  width: 600px;
}

.dropdown-list .li {
  color: #000;
}
  </style>
  
