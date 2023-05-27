import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LoginForm from './components/forms/LoginForm.vue';
import RegistrationForm from './components/forms/RegistrationForm.vue'
import MainDashboard from './components/MainDashboard.vue';
import AddItemForm from './components/forms/AddItemForm.vue';
import AddSupplierForm from './components/forms/AddSupplierForm.vue';
import { createStore } from 'vuex';

const store = createStore({
    state: {
      token: '' 
    },
    mutations: {
      setToken(state, token) {
          state.token = token; 
        }
    },
    actions: {
      setToken({ commit }, token) {
          commit('setToken', token); 
        }
    },
    getters: {
        getToken(state) {
            return state.token; 
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
    path: '/formItem',
    name: 'FormItem',
    component: AddItemForm,
  },
  {
    path: '/formSupplier',
    name: 'FormSupplier',
    component: AddSupplierForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(store).mount('#app')
