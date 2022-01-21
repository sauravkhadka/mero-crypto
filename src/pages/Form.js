import React, { useState } from 'react';
import Register from './Register';
import Registersuccess from './Registersuccess';

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormIsSubmitted(true);
    }
  return (
        <div>
            { !formIsSubmitted ? (<Register submitForm={submitForm} />
            ) : (<Registersuccess />
            )}
        </div>
    );
};

export default Form;
