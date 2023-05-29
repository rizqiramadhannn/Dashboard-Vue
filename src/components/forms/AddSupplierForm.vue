<template>
  <div class="container">
    <div class="tambah-supplier">
      <h3 class="title">Tambah Supplier</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nama-supplier">Nama supplier</label>
          <input type="text" id="nama-supplier" placeholder="Masukan Nama Supplier" v-model="namaSupplierForm" required>
        </div>
        <div class="form-group">
          <label for="alamat-supplier">Alamat Supplier</label>
          <input type="text" id="alamat-supplier" placeholder="Masukan Alamat Supplier" v-model="alamatSupplierForm" required>
        </div>
        <div class="form-group">
          <label for="notelp-supplier">No telp supplier</label>
          <input type="text" id="notelp-supplier" placeholder="Masukan No Telp Supplier" v-model="notelpSupplierForm" required>
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
    idSupplier: Number,
    namaSupplier: String,
    alamatSupplier: String,
    noTelpSupplier: String
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
    formData() {
      return this.$store.state.formData;
    }
  },
  data() {
    return {
      namaSupplierForm: this.namaSupplier || '',
      alamatSupplierForm: this.alamatSupplier || '',
      noTelpSupplierForm: this.noTelpSupplier || '',
      url: '',
      method: ''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        namaSupplier: this.namaSupplierForm,
        alamatSupplier: this.alamatSupplierForm,
        notelpSupplier: this.notelpSupplierForm
      };

      fetch(this.url, {
        method: this.method,
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
            // Handle form submission error
            console.log('Form submission failed');
          }
        })
        .catch(error => {
          console.log('Network error:', error);
        });
    },
    cancelForm() {
      console.log('Form canceled');
    },
  },
  mounted() {
    this.idSupplierForm = this.formData.idSupplier;
    this.namaSupplierForm = this.formData.namaSupplier;
    this.alamatSupplierForm = this.formData.alamatSupplier;
    this.notelpSupplierForm = this.formData.noTelpSupplier;
    if (
      this.namaSupplierForm === '' &&
      this.alamatSupplierForm === '' &&
      this.notelpSupplierForm === ''
    ) {
      this.url = 'http://159.223.57.121:8090/supplier/create';
      this.method = 'POST'
    } else {
      this.url = `http://159.223.57.121:8090/supplier/update/${this.formData.idSupplier}`;
      this.method = 'PUT'
    }
    console.log(this.url);
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

.tambah-supplier {
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

</style>
