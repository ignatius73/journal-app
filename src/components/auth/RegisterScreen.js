import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

    const [ values, handleInputChange ] = useForm({
        name: 'Gabriel',
        email: 'ghgarciar@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = values;

    const handleSubmit = (e)=>{
        e.preventDefault()
        if ( isFormValid()){
            console.log("Formulario correcto");
        }
    }

    const isFormValid = () =>{
        if(name.trim().length === 0){
            return false;
        }
        if (!validator.isEmail(email)){
            return false;
        }
        if(password !== password2 || password.lenght <= 6){
            return false;
        }
        
    }


    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleSubmit}>
                <h4 class="auth__alert-error"></h4>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
