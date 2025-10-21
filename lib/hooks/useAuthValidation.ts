import { useState } from 'react';
import { z } from 'zod';


type FormErrors<T> = Partial<Record<keyof T, string>>;
type FormTouched<T> = Partial<Record<keyof T, boolean>>;
type FieldChangeHandler = (value: any) => void;
type FieldBlurHandler = () => void;

interface UseAuthValidationProps<T> {
    schema: z.ZodSchema<T>;
    initialValues: T;
    onSubmit: (values: T) => void | Promise<void>;
}

interface UseAuthValidationReturn<T> {
    values: T;
    errors: FormErrors<T>;
    touched: FormTouched<T>;
    handleChangeField: (field: keyof T) => FieldChangeHandler;
    handleBlurField: (field: keyof T) => FieldBlurHandler;
    handleSubmitForm: () => Promise<void>;
    isSubmitting: boolean;
    resetForm: () => void;
}

export function useAuthValidation<T extends Record<string, any>>({
    schema,
    initialValues,
    onSubmit,
}: UseAuthValidationProps<T>): UseAuthValidationReturn<T> {
    
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<FormErrors<T>>({});
    const [touched, setTouched] = useState<FormTouched<T>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    /**
     * Actualiza el valor de un campo
     */
    const handleChangeField = (field: keyof T) => (value: any) => {
        setValues({
            ...values,
            [field]: value 
        });
    };

    /**
     * Marca un campo como tocado
     */
    const handleBlurField = (field: keyof T) => () => {
        setTouched({ 
            ...touched,
            [field]: true
        });
    };

    /**
     * Convierte errores de Zod en objeto simple
     */
    const getErrorsForm = (zodError: z.ZodError): FormErrors<T> => {
        const newErrors: FormErrors<T> = {};
        zodError.issues.forEach((issue) => {
            const field = issue.path[0] as keyof T;
            if (field && !newErrors[field]) {
                newErrors[field] = issue.message;
            }
        });
        return newErrors;
    };

    /**
     * Valida el formulario completo y ejecuta onSubmit si es válido
     */
    const handleSubmitForm = async () => {
    try {
        setIsSubmitting(true);

        // Marcar todos los campos como touched para mostrar errores
        const allTouched: FormTouched<T> = {};
        Object.keys(initialValues).forEach((field) => {
            allTouched[field as keyof T] = true;
        });
        setTouched(allTouched);

        // Validar con Zod
        const validationResult = schema.safeParse(values);

        if (!validationResult.success) {
            const formErrors = getErrorsForm(validationResult.error);
            setErrors(formErrors);
            return;
        }

        // Validación exitosa
        setErrors({});
        await onSubmit(validationResult.data);
    } catch (error) {
        console.error('Error en handleSubmit:', error);
    } finally {
        setIsSubmitting(false);
    }
};

    /**
     * Resetea el formulario a sus valores iniciales
     */
    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        touched,
        handleChangeField,
        handleBlurField,
        handleSubmitForm,
        isSubmitting,
        resetForm
    };
}