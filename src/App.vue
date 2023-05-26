<template>
  <TopNav></TopNav>
  <!-- <LoginForm></LoginForm> -->
  <!-- <RegistrationForm></RegistrationForm> -->
  <MainDashboard></MainDashboard>
  <BottomNav></BottomNav>
</template>

<script>
// import LoginForm from './components/forms/LoginForm.vue';
// import RegistrationForm from './components/forms/RegistrationForm.vue'
import BottomNav from './components/BottomNav.vue'
import TopNav from './components/TopNav.vue'
import MainDashboard from './components/MainDashboard.vue'

export default {
  name: 'App',
  components: {
    // LoginForm,
    // RegistrationForm,
    BottomNav,
    TopNav,
    MainDashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
