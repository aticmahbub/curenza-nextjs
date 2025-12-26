/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import z from 'zod';

const registerPatientValidationSchema = z
    .object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email address'),
        address: z.string().optional(),
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters long'),
        confirmPassword: z
            .string()
            .min(6, 'Confirm Password must be at least 6 characters long'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
    });

export const registerPatient = async (
    _currentState: any,
    formData: any,
): Promise<any> => {
    try {
        const validationData = {
            name: formData.get('name'),
            address: formData.get('address'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        };

        const parsedData =
            registerPatientValidationSchema.safeParse(validationData);

        if (!parsedData.success) {
            return {
                success: false,
                errors: parsedData.error.issues.map((issue) => ({
                    field: issue.path[0],
                    message: issue.message,
                })),
            };
        }
        const registrationData = {
            password: formData.get('password'),
            patient: {
                name: formData.get('name'),
                address: formData.get('address'),
                email: formData.get('email'),
            },
        };

        const newFormData = new FormData();

        newFormData.append('data', JSON.stringify(registrationData));

        const res = await fetch(
            'http://localhost:4000/api/v1/user/create-patient',
            {method: 'POST', body: newFormData},
        ).then((res) => res.json());

        console.log('res', res);
        return res;
    } catch (error) {
        console.log(error);
        return {error: 'Registration is failed'};
    }
};
