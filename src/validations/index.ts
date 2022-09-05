import * as yup from 'yup';

export const string = yup.string().nullable(true);

export const number = (field: string) =>
  yup.string().matches(/[0-9]/, `${field} precisa ser um número`);


export const email = yup
  .string()
  .trim()
  .matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    'Valor inserido não corresponde a um e-mail'
  )
  .nullable(true)
  .required('O e-mail é obrigatório');

export const uuid = yup.string().uuid('O id não é válido');