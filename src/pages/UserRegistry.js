import React, { Component, useState } from 'react';
import { Navbar, SubmitUserForm } from '../components/index';
import UserRegistryStyle from '../styles/userRegistryStyle.css';

{/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" /> */}

export default function UserRegistry() {

  return(
    <div>
      <Navbar />
      <div className="modal-body">
        <SubmitUserForm requestMethod="post" />
      </div>
    </div>
  );
}