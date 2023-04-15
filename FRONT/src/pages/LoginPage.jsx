import Header from '../components/Header';
import React, { useState } from 'react';

export const LoginPage = () => {
	const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

	return (
		<section>
			<Header />
			<h1>Login</h1>
			<form className='border-2 border-blue-500 shadow-lg'>
      <div className='flex flex-col text-start'>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className='flex flex-col text-start'>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
    </form>
		</section>
	)
};