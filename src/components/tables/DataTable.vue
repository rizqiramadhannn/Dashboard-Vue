<template>
    <table class="data-table">
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
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.supplier }}</td>
          <td>{{ item.location }}</td>
          <td>
            <button class="delete-button">Hapus</button>
            <button class="update-button">Update</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
.data-table {
  width: 98%;
  border-collapse: collapse;
  border: 1px solid #ddd; /* Add outer border */
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
  background-color: #f8f9fb; /* Set background color of th to gray */
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

/* Add your own styles as needed */
</style>

  