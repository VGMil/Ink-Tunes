import { z } from 'zod';
import { LOGIN_ERRORS, REGISTER_ERRORS } from '../constants/validationMessages';

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, LOGIN_ERRORS.email.required)
        .email(LOGIN_ERRORS.email.invalid)
        .toLowerCase()
        .trim(),
    password: z
        .string()
        .min(1, LOGIN_ERRORS.password.required)
        .min(6, LOGIN_ERRORS.password.minLength),
});

export const registerSchema = z.object({
    name: z
        .string()
        .min(1, REGISTER_ERRORS.name.required)
        .min(3, REGISTER_ERRORS.name.minLength)
        .trim(),
    email: z
        .string()
        .min(1, REGISTER_ERRORS.email.required)
        .email(REGISTER_ERRORS.email.invalid)
        .toLowerCase()
        .trim(),
    password: z
        .string()
        .min(1, REGISTER_ERRORS.password.required)
        .min(8, REGISTER_ERRORS.password.minLength),
    confirmPassword: z
        .string()
        .min(1, REGISTER_ERRORS.confirmPassword.required)
}).refine((data) => data.password === data.confirmPassword, {
    message: REGISTER_ERRORS.confirmPassword.match,
    path: ['confirmPassword'],
});