import { object, string, number, date, InferType, ref } from 'yup';

let validations = object({  
  email: string().email().required(),  
  password: string().min(5, 'must be at least 5 characters long').required(),
  passwordConfirm: string().oneOf([ref('password'), null], 'Passwords must match').required()
});

export default validations;