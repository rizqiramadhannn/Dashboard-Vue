<template>
    <div class="login-container">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="login-form-item">
          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="Enter username" v-model="username" required>
        </div>
        <div class="login-form-item">
          <label for="profilename">Profile Name:</label>
          <input type="text" id="profilename" placeholder= "Enter profile name" v-model="profilename" required>
        </div>
        <div class="login-form-item">
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder= "Enter password" v-model="password" required>
        </div>
        <div>
          <button type="submit">Daftar</button>
        </div>
        <router-link to="/" class="registered">Sudah punya akun</router-link>
      </form>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          username: '',
          profilename: '',
          password: ''
        };
      },
      methods: {
        async register() {
          try {
            const response = await fetch('http://159.223.57.121:8090/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: this.username,
                profileName: this.profilename,
                password: this.password,
              }),
            });

            if (response.ok) {
              // Registration success, handle accordingly (e.g., display success message)
              console.log('Registration successful');
              this.$router.push({ path: '/' });
            } else {
              // Registration failed, handle accordingly (e.g., display error message)
              console.log('Registration failed');
            }
          } catch (error) {
            // Handle network or server errors
            console.log('Error:', error);
          }
        }
      }
    };
  </script>

<style scoped>

h2 {
  color: #5d8db9;
  background-color: #b8dcfe;
  padding: 1.5rem 2.5rem;
  margin-top: 0px;
}

.login-form-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  margin-left: 1rem;
}
.login-container {
  max-width: 650px;
  margin: 0 auto;
  padding-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="password"] {
  border: #757575 2px solid;
  border-radius: 4px;
  height: 1.8rem;
  width: 97%;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
}

button:hover {
  background-color: #0056b3;
}
</style>
  