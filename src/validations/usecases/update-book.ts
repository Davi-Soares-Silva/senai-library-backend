import * as yup from 'yup';
import { number } from '..'

export const updateBookValidation = yup.object().shape({
    id: number('O id do livro')
        .required('O  id do livro é obrigatório')
})