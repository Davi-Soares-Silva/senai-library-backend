import * as yup from 'yup';
import { email, string } from '..';

export const userLoginValidation = yup.object().shape({
    email: email,
    password: string.required('A senha é obrigatória')
})