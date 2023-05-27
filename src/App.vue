<template>
  <div id="app">
    <TopNav v-if="showTopNav"></TopNav>
    <router-view></router-view>
    <BottomNav v-if="showBottomNav"></BottomNav>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import BottomNav from '@/components/BottomNav.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    BottomNav,
  },
  computed: {
    showTopNav() {
      return this.$route.path !== '/' && this.$route.path !== '/registration';
    },
    showBottomNav() {
      return this.$route.path !== '/' && this.$route.path !== '/registration';
    },
  },
};
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