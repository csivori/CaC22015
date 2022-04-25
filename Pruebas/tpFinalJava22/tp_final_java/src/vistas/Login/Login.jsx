import React, {useState} from 'react';

const Login = () => {
 
    const [form, setForm] = useState({email:"", pwd:""});

    const handleSubmit = (ev) => {};

    const handleChange = (ev) => {
        setForm({...form, [evt.target.name]: evt.target.value});
    };
 
 
    return (
    <div>Login</div>
    <div>
        <input type="text" name="email" onChange={handleChange} />
        <input type="text" name="pwd" onChange={handleChange} />
        <input type="text" name="email" onChange={handleChange} />
    </div>

  )
}

export default Login