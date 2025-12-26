/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import z from 'zod';

const loginUserValidationSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const loginUser = async (
    _currentState: any,
    formData: any,
): Promise<any> => {
    try {
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        const parsedData = loginUserValidationSchema.safeParse(loginData);

        if (!parsedData.success) {
            return {
                success: false,
                errors: parsedData.error.issues.map((issue) => ({
                    field: issue.path[0],
                    message: issue.message,
                })),
            };
        }

        const res = await fetch('http://localhost:4000/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {'Content-Type': 'application/json'},
        }).then((res) => res.json());

        return res;
    } catch (error) {
        console.log(error);
        return {error: 'Login is failed'};
    }
};
