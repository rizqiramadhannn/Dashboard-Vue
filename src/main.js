import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LoginForm from './components/forms/LoginForm.vue';
import RegistrationForm from './components/forms/RegistrationForm.vue'
import MainDashboard from './components/MainDashboard.vue';
import AddItemForm from './components/forms/AddItemForm.vue';
import { createStore } from 'vuex';

const store = createStore({
    state: {
      token: '' // Initialize the token as an empty string
    },
    mutations: {
      setToken(state, token) {
          state.token = token; // Set the token value
        }
    },
    actions: {
      setToken({ commit }, token) {
          commit('setToken', token); // Call the mutation to set the token
        }
    },
    getters: {
        getToken(state) {
            return state.token; // Retrieve the token value
        }
    }
  });

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationForm,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: MainDashboard,
  },
  {
    path: '/addItem',
    name: 'AddItem',
    component: AddItemForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(store).mount('#app')
