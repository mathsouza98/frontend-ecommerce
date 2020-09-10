import React, { useState } from 'react';
import axios from 'axios';
import loginStyle from '../styles/loginStyle.css';
import auth from '../services/auth';

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.login(username, password, () => {
      props.history.push("/admin");
    })
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

export default Login;