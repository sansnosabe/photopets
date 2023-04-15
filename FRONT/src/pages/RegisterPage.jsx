import Header from "../components/Header"
import React, { useState } from 'react';

export const RegisterPage = () => {
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
			<h1>Registro</h1>
			<form className='border-2 border-blue-500 shadow-lg'>
      <div className='flex flex-col text-start'>
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className='flex flex-col text-start'>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
			<div className='flex flex-col text-start'>
        <label htmlFor="rpassword">Repetir contraseña</label>
        <input type="password" id="rpassword" value={password} onChange={handlePasswordChange} />
      </div>
			<div className='flex flex-col text-start'>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={username} onChange={handleUsernameChange} />
      </div>
			<div className='flex flex-col text-start'>
        <label htmlFor="kind">¿Que animal eres?</label>
        <input type="text" id="kind" value={username} onChange={handleUsernameChange} />
      </div>
			<div className='flex flex-col text-start'>
        <label htmlFor="breed">¿Que raza eres?</label>
        <input type="text" id="breed" value={username} onChange={handleUsernameChange} />
      </div>
    </form>
		</section>
	)
}