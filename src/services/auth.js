import axios from 'axios';

class Auth {
  constructor() {
    this.authenticated = false;
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
        this.authenticated = true;
        this.userRole = response.data.roles;
        localStorage.setItem('authToken', response.data.accessToken);
      }
    } catch (error) {
      alert("Não foi possível efetuar login\n" + error);
    }
    cb();
  }

  logout(cb) {
    localStorage.setItem('authToken', '')
    this.authenticated = false;
    this.userRole = [];
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  isUserAdmin() {
    if (this.userRole.includes("ROLE_ADMIN")) return true;

    return false;
  }
}

export default new Auth();