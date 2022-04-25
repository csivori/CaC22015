import React, {useState} from 'react';

const Login = () => { 
    const [formLogin, setFormLogin] = useState({email:"", pwd:""});

    const handleSubmit = (ev) => {};
    const handleCancel = (ev) => {};

    const handleChange = (ev) => {
        setFormLogin({...formLogin, [ev.target.name]: ev.target.value});
    };
 
    return (
    <>
      <div>Login</div>
      <div>
          <input type="text" placeholder="email" name="email" onChange={handleChange} value={formLogin.email} />
          <input type="text" placeholder="pwd" name="pwd" onChange={handleChange} value={formLogin.pwd} />
          <input type="submit" onSubmit={handleSubmit} />
          <input type="button" onClick={handleCancel} value="Cancelar" />
      </div>
    </>
  )
}

export default Login