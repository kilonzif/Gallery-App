import React, { useState } from 'react';
import '../App.css';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Perform sign-in logic using Fetch API
      const response = await fetch('your_signin_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle response
      if (response.ok) {
        // Handle successful sign-in
        console.log('Signed in successfully!');
      } else {
        // Handle sign-in error
        console.log('Sign-in failed!');
      }
    } catch (error) {
      console.error('Error occurred during sign-in:', error);
    }
  };

  return (
    <div className='auth-container'>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
