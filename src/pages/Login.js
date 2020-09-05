import React, { useState } from 'react';
import loginApi from '../services/loginApi';
import loginStyle from '../styles/loginStyle.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signinRequest();
  }

  const signinRequest = async () => {
    loginApi.post('http://localhost:8080/api/auth/signin', {
      username: username,
      password: password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h3>Primo's store</h3>
        </div>
        <form onSubmit={handleSubmit} >
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={username} onChange={e => setUsername(e.target.value)} />
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}