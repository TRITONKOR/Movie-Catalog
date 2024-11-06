import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const validateForm = (formData: FormData) => {
    let errors: Record<string, string> = {};
    let formIsValid = true;

    if (!formData.name) {
        formIsValid = false;
        errors.name = 'Name is required';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
        formIsValid = false;
        errors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
        formIsValid = false;
        errors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
        formIsValid = false;
        errors.confirmPassword = 'Passwords do not match';
    }

    return { formIsValid, errors };
};

export const register = async (formData: FormData) => {
    try {
        await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
        );

        const token = await auth.currentUser?.getIdToken();

        const response = await fetch('http://localhost:3001/protected', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();
        console.log(data);

        return data;
    } catch (err) {
        console.log(err);
    }
};
