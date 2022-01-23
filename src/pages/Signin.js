import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Signinvalidation from './Signinvalidation';
import './Signin.css'

const Signin = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Signinvalidation(values));
        if(Object.keys(errors).length === 0){
            navigate("/signinsuccess");
        }
    };

  return (
        <div className='main-container'>
            <div className='signin-container'>
                <div><h2 className='signin-title'>Sign In</h2></div>
                <form classname='signin-form' onSubmit={handleSubmit}>
                    <div className='signin-email'>
                        <label className='label'>Email</label>
                        <input className='input' type='email' name='email' value={values.email} required onChange={handleChange} />
                    </div>
                    <div className='signin-psw'>
                        <label className='label'>Password</label>
                        <input className='input' type='password' name='password' value={values.password} required onChange={handleChange} />
                    </div>
                    <button className='btn-2'>Login</button>
                </form>
            </div>
        </div>
  );
};

export default Signin;
