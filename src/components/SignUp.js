import React, { useState } from 'react';
import '../App.css';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Perform sign-up logic using Fetch API
      const response = await fetch('your_signup_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle response
      if (response.ok) {
        // Handle successful sign-up
        console.log('Signed up successfully!');
      } else {
        // Handle sign-up error
        console.log('Sign-up failed!');
      }
    } catch (error) {
      console.error('Error occurred during sign-up:', error);
    }
  };

  return (
    <div className='auth-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
