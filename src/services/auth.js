import axios from 'axios';

class Auth {
  constructor() {
    this.authenticated = false;
  }

  async login(username, password, cb) {
    const response = await axios.post('http://localhost:8080/api/auth/signin', {
      username: username,
      password: password
    })
    console.log(response)
    if (response.status === 200) {
      this.authenticated = true;
    }
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
