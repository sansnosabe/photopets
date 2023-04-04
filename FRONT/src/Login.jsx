import { useState } from 'react'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <div className="Login">
      <h1 className="text-2xl pt-5">Esto viene desde login</h1>
    </div>
  );
}

export default Login