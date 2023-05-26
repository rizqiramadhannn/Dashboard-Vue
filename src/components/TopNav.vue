<template>
    <div class="top-nav">
      <div class="nav-left">
        <span class="logo">Marketplace Sinau Coding</span>
      </div>
      <div class="nav-right">
        <button class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="nav-menu" :class="{ open: isMenuOpen }">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    background-color: #b8dcfe;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    z-index: 999;
  }
  
  .nav-left {
    display: flex;
    align-items: center;
  }
  
  .nav-right {
    display: flex;
    align-items: center;
    padding-right: 2rem;
  }
  
  .logo {
    font-weight: bold;
    color: #6394c3;
  }
  
  .hamburger {
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }
  
  .hamburger span {
    width: 24px;
    height: 2px;
    background-color: #6394c3;
    margin-bottom: 4px;
  }
  
  .nav-menu {
    position: absolute;
    top: 56px;
    right: 0;
    background-color: #b8dcfe;
    width: 200px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .nav-menu.open {
    max-height: 300px;
  }
  
  .nav-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-menu li {
    padding: 8px 16px;
  }
  
  .nav-menu a {
    text-decoration: none;
    color: #6394c3;
  }
  
  </style>
  