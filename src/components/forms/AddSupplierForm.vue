<template>
  <div class="container">
    <div class="tambah-supplier">
      <h3 class="title">Tambah Supplier</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nama-supplier">Nama supplier</label>
          <input type="text" id="nama-supplier" placeholder="Masukan Nama Supplier" v-model="namaSupplier" required>
        </div>
        <div class="form-group">
          <label for="alamat-supplier">Alamat Supplier</label>
          <input type="text" id="alamat-supplier" placeholder="Masukan Alamat Supplier" v-model="alamatSupplier" required>
        </div>
        <div class="form-group">
          <label for="notelp-supplier">No telp supplier</label>
          <input type="text" id="notelp-supplier" placeholder="Masukan No Telp Supplier" v-model="notelpSupplier" required>
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
  computed: {
    token() {
      return this.$store.getters.getToken;
    }
  },
  data() {
    return {
      namaSupplier: '',
      alamatSupplier: '',
      notelpSupplier: '',
      url: ''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        namaSupplier: this.namaSupplier,
        alamatSupplier: this.alamatSupplier,
        notelpSupplier: this.notelpSupplier
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
            this.$router.push('/dashboard');
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
    resetForm() {
      this.namaSupplier = '';
      this.alamatSupplier = '';
      this.notelpSupplier = '';
    }
  },
  mounted() {
    if (
      this.namaSupplier === '' &&
      this.alamatSupplier === '' &&
      this.notelpSupplier === ''
    ) {
      this.url = 'http://159.223.57.121:8090/supplier/create';
    } else {
      this.url = 'editurl';
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
