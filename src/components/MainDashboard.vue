<template>
  <link rel="stylesheet" href="path/to/node_modules/@fortawesome/fontawesome-free/css/all.min.css">
  <div class="dashboard">
    <div class="dashboard-left">
      <div class="card">
        <img src="../assets/user.png" alt="" class="profile-pic">
        <h3 class="name">{{ this.$route.query.username }}</h3>
      </div>
      <div class="menu-card">
        <h3 class="menu-title">Menu</h3>
        <ul class="options">
          <li :class="{ active: activeOption === 'barang' }" @click="setActiveOption('barang')">Barang</li>
          <li :class="{ active: activeOption === 'supplier' }" @click="setActiveOption('supplier')">Supplier</li>
        </ul>
      </div>
      <div class="online-card">
        <div class="status">
          <h3 class="status-title">Online</h3>
          <span class="dot"></span>
        </div>
        <div class="content">
          <p>hari online: {{ currentDate }}</p>
          <p>waktu online: {{ currentTime }}</p>
        </div>
      </div>
    </div>
    <div class="dashboard-right">
      <h1 class="dashboard-title">Dashboard</h1>
      <div class="dashboard-header">
        <div class="header-left">
          <h2 class="dashboard-subtitle">{{ activeOption === 'supplier' ? 'Supplier' : 'Barang' }}</h2>
        </div>
        <div class="header-right">
          <router-link :to="{ path: activeOption === 'barang' ? '/formItem' : '/formSupplier', query: { supplierList: itemsSupp } }" class="add-button">
            {{ activeOption === 'barang' ? 'Tambah Barang' : 'Tambah Supplier' }}
          </router-link>
        </div>
      </div>
      <DataTable :selectedOption="activeOption" />
      <div class="pagination">
        <!-- Pagination component or logic goes here -->
      </div>
    </div>
  </div>
  
</template>

<script>
import DataTable from './tables/DataTable.vue';

export default {
  computed: {
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
  props: {
    profilePic: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      activeOption: 'barang',
      currentDate: '',
      currentTime: '',
    };
  },
  components: {
    DataTable
  },
  methods: {
    setActiveOption(option) {
      this.activeOption = option;
    },
    getCurrentDateTime() {
      const currentDateObj = new Date();
      this.currentDate = currentDateObj.toDateString();
      this.currentTime = currentDateObj.toLocaleTimeString();
    },
    
  },
  mounted() {
    this.getCurrentDateTime();
    this.$store.commit('setFormData', {
      idSupplier: '',
      namaSupplier: '',
      alamatSupplier: '',
      noTelpSupplier: ''
    });
  },
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr;
}

.dashboard .dashboard-right {
  margin: 0;
  border-radius: 8px;
  border: #ddd 1px solid;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.1);
}

.dashboard .dashboard-left {
  margin: 0 1rem 0 0;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 1rem;
}

.dashboard-title {
  margin: 0 0 1rem 0;
  color: #6394c3;
  background-color: #b8dcfe;
  padding: 1rem;
  text-align: left;
  border: none;
  border-radius: 8px 8px 0 0;
}

.dashboard-subtitle {
  margin: 0;
  color: #000;
}

.add-button {
  background-color: #6394c3;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.1);
}

.profile-pic {
  object-fit: cover;
  margin: 2rem 1rem;
}

.name {
  margin: 0;
  color: #6394c3;
  background-color: #b8dcfe;
  width: 100%;
  padding: 1rem 0;
}

.menu-card {
  margin-top: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.1);
}

.menu-title {
  padding: 1rem 0;
  margin: 0;
  color: #6394c3;
  background-color: #b8dcfe;
}

.options {
  list-style: none;
  padding: 0;
  margin: 0;
}

.options li {
  font-size: 18px;
  cursor: pointer;
  padding: 1rem 1.5rem;
  text-align: left;
}

.options li.active {
  background-color: #6394c3;
  color: #fff;
}

.online-card {
  margin: 1rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #b8dcfe;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.1);
}

.status {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #4CAF50;
  margin-left: 8px;
}

.status-title {
  margin: 0;
  color: #6394c3;
}

.content p {
  margin: 0;
  padding: 0.5rem;
  background-color: #fff;
}

.content p:last-child {
  border: none;
  border-radius: 0 0 8px 8px;
  padding-bottom: 1rem;
}
.content p:first-child {
  padding-top: 1rem;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

