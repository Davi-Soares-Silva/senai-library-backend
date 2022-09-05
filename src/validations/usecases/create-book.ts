import * as yup from 'yup';
import { string, number } from '..'

export const createBookValidation = yup.object().shape({
    title: string
        .required('O título é obrigatório')
        .min(2, 'O mínimo de caracteres é 2')
        .max(100, 'O máximo de caracteres é 100'),
    price: number('O preço')
        .required('O preço do livro é obrigatório'),
    details: string
        .required('Os detalhes são obrigatórios')
        .min(2, 'O mínimo de caracteres é 2')
        .max(100, 'O máximo de caracteres é 100'),
})