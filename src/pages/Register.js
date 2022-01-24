import React, { useState } from 'react';
import Validation from './Validation';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        fullname:"",
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(Object.keys(errors).length === 0){
            navigate("/registersuccess");
        }
    };

  return (
        <div className='register-container'>
            <div className='app-wrapper'>
                <div>
                  <h2 className='title'>Create Account</h2>
                </div>
                <form className='form-wrapper' onSubmit={handleSubmit}>
                    <div className='name'>
                      <label className='label'>Full Name</label>
                      <input className='input' 
                      type='text' 
                      name='fullname' 
                      value={values.fullname}
                      onChange={handleChange} required />
                      {errors.fullname && <p className='error'>{errors.fullname}</p>}
                    </div>
                    <div className='email'>
                      <label className='label'>Email</label>
                      <input className='input' 
                      type='email' 
                      name='email' 
                      value={values.email}
                      onChange={handleChange} required />
                      {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className='password'>
                      <label className='label'>Password</label>
                      <input className='input' 
                        type='password' 
                        name='password' 
                        value={values.password}
                        onChange={handleChange} required />
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <button className='btn'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
