import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { LoginWithFacebook } from './LoginWithFacebook';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const submit = e => {
    e.preventDefault();
 
    Meteor.loginWithPassword(username, password, function(err) {
        setError(null);
        if (err) {                   
           console.error(err.message);
           setError(err.message);
        }
    });
  };

  return (
    <form onSubmit={submit} className="login-form">
     <LoginWithFacebook />
  <div>
    <label htmlFor="username">Username</label>

    <input
      type="text"
      placeholder="Username"
      name="username"
      required
      onChange={(e) => setUsername(e.target.value)}
    />
  </div>

  <div>
    <label htmlFor="password">Password</label>

    <input
      type="password"
      placeholder="Password"
      name="password"
      required
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div className="alert-container">
  {error &&
    <div className="alert">
      <span>{error}</span>
    </div>
  }
  
</div>

  <div>
    <button type="submit">Log In</button>
  </div>
</form>
  );
};