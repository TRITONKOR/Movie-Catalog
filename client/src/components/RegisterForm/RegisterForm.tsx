import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormData, register, validateForm } from '../../services/formService';
import { setUser } from '../../store/userSlice';
import './registerForm.scss';

const RegisterForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const redirectToSearchPage = () => {
        navigate('/search');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { formIsValid, errors } = validateForm(formData);
        setErrors(errors);

        if (formIsValid) {
            const userData = await register(formData);
            if (userData) {
                dispatch(
                    setUser({ name: formData.name, email: formData.email })
                );
                redirectToSearchPage();
            }
        }
    };

    return (
        <div className="wrapper">
            <div className="register">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            name="name"
                            placeholder="username"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="submit-container">
                        <button type="submit" className="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
