<template>
    <div class="bottom-nav">
      <router-link to="/contact" class="nav-item" :class="{ active: currentRoute === '/contact' }">
        <i class="fas fa-envelope"></i>
        <span>Marketplace Sinau Coding</span>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentRoute: ''
      };
    },
    mounted() {
      this.currentRoute = this.$route.path;
    },
    watch: {
      '$route.path'(newVal) {
        this.currentRoute = newVal;
      }
    }
  };
  </script>
  
  <style scoped>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 56px;
    background-color: #b8dcfe;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #6394c3;
    font-weight: bold;
    font-size: 18px;
  }
  
  .nav-item i {
    margin-bottom: 4px;
  }
  
  .nav-item.active {
    color: #333;
    font-weight: bold;
  }
  </style>
  