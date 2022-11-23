import * as yup from 'yup';
import { CONSTANTS } from '../../config';

export const authSchemas = {
  createAccount : yup.object().shape({
    email : yup.string().email(CONSTANTS.ERROR_MSGS.EMAIL_INVALID)
    .required(CONSTANTS.ERROR_MSGS.EMAIL_REQUIRED),
    password : yup.string().min(CONSTANTS.MIN_LENGTH_PASSWORD, 
    ({ }) => CONSTANTS.ERROR_MSGS.PASSWORD_LENGTH)
    .required(CONSTANTS.ERROR_MSGS.PASSWORD_REQUIRED),
    repeatPassword : yup.string().oneOf([yup.ref('password')], CONSTANTS.ERROR_MSGS.PASSWORD_NOT_MATCH)
    .required(CONSTANTS.ERROR_MSGS.PASSWORD_REQUIRED),
  }),
}