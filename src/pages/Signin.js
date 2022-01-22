import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Signinsuccess from './Signinsuccess';

const Signin = () => {
    const [values, setValues] = useState({
        email:"",
        psw:""
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const navigate = useNavigate()

    const handleLink = (path) => {
        navigate(`${path}`);
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type='email' name='email' value={values.email} placeholder='email' required onChange={handleChange} />
              <input type='password' name='psw' value={values.psw} placeholder='password' required onChange={handleChange} />
              <button className='btn' onClick={() => handleLink("/Signinsuccess")}>Login</button>
            </form>
        </div>
  );
};

export default Signin;
