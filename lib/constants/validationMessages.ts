export const LOGIN_ERRORS = {
    email: {
        required: 'El email es requerido',
        invalid: 'Ingresa un email válido',
    },
    password: {
        required: 'La contraseña es requerida',
        minLength: 'La contraseña debe tener al menos 6 caracteres',
    }
};

export const REGISTER_ERRORS = {
    name: {
        required: 'El nombre es requerido',
        minLength: 'El nombre debe tener al menos 3 caracteres',
    },
    email: {
        required: 'El email es requerido',
        invalid: 'Ingresa un email válido',
    },
    password: {
        required: 'La contraseña es requerida',
        minLength: 'La contraseña debe tener al menos 8 caracteres',
    },
    confirmPassword: {
        required: 'La confirmación de contraseña es requerida',
        match: 'Las contraseñas no coinciden',
    }
};