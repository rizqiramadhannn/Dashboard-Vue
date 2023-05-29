<template>
  <table v-if="selectedOption === 'barang'" class="data-table">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama Barang</th>
        <th>Stock</th>
        <th>Harga</th>
        <th>Nama Supplier</th>
        <th>Alamat Supplier</th>
        <th>No Telp Supplier</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in reversedItems" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.namaBarang }}</td>
        <td>{{ item.stok }}</td>
        <td>{{ item.harga }}</td>
        <td>{{ item.supplier.namaSupplier }}</td>
        <td>{{ item.supplier.alamat }}</td>
        <td>{{ item.supplier.noTelp }}</td>
        <td>
          <button class="delete-button" @click="deleteItem(item.id)">Hapus</button>
          <button class="update-button">Update</button>
        </td>
      </tr>
    </tbody>
  </table>

  <table v-else-if="selectedOption === 'supplier'" class="data-table">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama Supplier</th>
        <th>Alamat Supplier</th>
        <th>No Telp Supplier</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in reversedItemsSupp" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.namaSupplier }}</td>
        <td>{{ item.alamat }}</td>
        <td>{{ item.noTelp }}</td>
        <td>
          <button class="delete-button" @click="deleteItem(item.id)">Hapus</button>
          <button class="update-button" @click="$event => fetchSuppbyId(item.id)">Update</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    selectedOption: {
      type: String,
      required: true
    }
  },
  computed: {
    reversedItems() {
      return this.items.slice().reverse();
    },
    reversedItemsSupp() {
      return this.itemsSupp.slice().reverse();
    },
    token() {
      // Retrieve the token from the store if available
      let token = this.$store.getters.getToken;
      if (!token) {
        // If token is not available in the store, retrieve it from local storage
        token = localStorage.getItem('token');
      }
      return token;
    }
  },
  data() {
    return {
      items: [],
      itemsSupp: [],
      itemEdit: [],
    }
  },
  methods: {
    async fetchData() {
      try {
        const limit = 10; 
        const offset = 0; 
        const url = `http://159.223.57.121:8090/barang/find-all?limit=${limit}&offset=${offset}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}` 
          },
          params: {
            limit,
            offset
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          this.items = data.data; 
        } else {
          // handle error response
        }
      } catch (error) {
        // handle network or server errors
      }
    },
    async fetchDataSupp() {
      try {
        const limit = 10; 
        const offset = 0; 
        const url = `http://159.223.57.121:8090/supplier/find-all?limit=${limit}&offset=${offset}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}` 
          },
          params: {
            limit,
            offset
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          this.itemsSupp = data.data; 
        } else {
          // handle error response
        }
      } catch (error) {
        // handle network or server errors
      }
    },
    async fetchSuppbyId(id) {
      try {
        const url = `http://159.223.57.121:8090/supplier/find-by-id/${id}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}` 
          },
        });
        if (response.ok) {
          const data = await response.json();
          this.itemEdit = data.data;
          console.log(this.itemEdit.id);
          this.$store.commit('setFormData', {
            idSupplier: this.itemEdit.id,
            namaSupplier: this.itemEdit.namaSupplier,
            alamatSupplier: this.itemEdit.alamat,
            noTelpSupplier: this.itemEdit.noTelp
          });
          this.$router.push('/formSupplier');
        } else {
          // handle error response
        }
      } catch (error) {
        // handle network or server errors
      }
    },
    deleteItem(id) {
      let deleteUrl = '';
      if (this.selectedOption === 'supplier') {
        deleteUrl = `http://159.223.57.121:8090/supplier/delete/${id}`;
      } else if (this.selectedOption === 'barang') {
        deleteUrl = `http://159.223.57.121:8090/barang/delete/${id}`;
      }
      fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })
        .then(response => {
          if (response.ok) {
              console.log('Item deleted successfully');
              setTimeout(() => {
                location.reload();
              }, 1000);
          } else {
            // Handle delete request error
            console.log('Item deletion failed');
          }
        })
        .catch(error => {
          // Handle network error
          console.log('Network error:', error);
        });
    },
  },
  mounted() {
    this.fetchData();
    this.fetchDataSupp();
  },
};
</script>

<style scoped>
.data-table {
  width: 98%;
  border-collapse: collapse;
  border: 1px solid #ddd; 
  margin: 0 0.8rem;
}

.data-table th,
.data-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.data-table th {
  background-color: #f8f9fb; 
  color: #000;
  text-align: center;
}

.data-table td:last-child {
  display: flex;
  justify-content: space-evenly;
}

.data-table th:last-child,
.data-table td:last-child {
  border-right: none;
}

.delete-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.update-button {
  background-color: #f1c40f;
  color: black;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

</style>
