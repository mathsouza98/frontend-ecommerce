import React, { Component, useState } from 'react';
import { Navbar, SubmitUserForm } from '../components/index';
import UserRegistryStyle from '../styles/userRegistryStyle.css';

export default function UserRegistry() {
  return (
    <div>
      <Navbar />
      <div className="modal-body">
        <SubmitUserForm />
      </div>
    </div>
  );
}