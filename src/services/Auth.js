import axios from 'axios';

class Auth {
  constructor() {
    this.userRole = null;
  }

  async login(username, password, cb) {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        username: username,
        password: password
      })
      console.log(response)
      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.accessToken);
        localStorage.setItem('user_roles', response.data.roles);
        localStorage.setItem('isLogged', true);
      }
    } catch (error) {
      alert("Não foi possível efetuar login\n" + error);
    }
    cb();
  }

  logout(cb) {
    localStorage.setItem('authToken', '');
    localStorage.setItem('isLogged', false);
    this.userRole = [];
    cb();
  }

  isAuthenticated() {
    const isAuthenticated = localStorage.getItem('isLogged');
    return isAuthenticated;
  }

  isUserAdmin() {
    const userRoles = localStorage.getItem('user_roles');

    if (userRoles.includes("ROLE_ADMIN")) return true;

    return false;
  }
}

export default new Auth();