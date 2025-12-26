/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

export const registerPatient = async (
    _currentState: any,
    formData: any,
): Promise<any> => {
    try {
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
