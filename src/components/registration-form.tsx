import React from 'react';
import {Field, FieldDescription, FieldGroup, FieldLabel} from './ui/field';
import {Input} from './ui/input';
import {Button} from './ui/button';

export default function RegistrationForm() {
    return (
        <form>
            <FieldGroup>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* Name */}
                    <Field>
                        <FieldLabel>Full Name</FieldLabel>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            placeholder='John Doe'
                            required
                        ></Input>
                    </Field>

                    {/* Address */}
                    <Field>
                        <FieldLabel htmlFor='address'>Address</FieldLabel>
                        <Input
                            id='address'
                            name='address'
                            type='text'
                            placeholder='123 Main St'
                        />
                    </Field>

                    {/* Email */}
                    <Field>
                        <FieldLabel>Email</FieldLabel>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='john@example.com'
                            required
                        ></Input>
                    </Field>

                    {/* Password */}
                    <Field>
                        <FieldLabel>Password</FieldLabel>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='john@example.com'
                            required
                        ></Input>
                    </Field>

                    {/* Confirm Password */}
                    <Field className='md:col-span-2'>
                        <FieldLabel htmlFor='confirmPassword'>
                            Confirm Password
                        </FieldLabel>
                        <Input
                            id='confirmPassword'
                            name='confirmPassword'
                            type='password'
                        />
                    </Field>
                </div>

                <FieldGroup className='mt-4'>
                    <Field>
                        <Button>Create Account</Button>

                        <FieldDescription className='px-6 text-center'>
                            Already have an account?{' '}
                            <a
                                href='/login'
                                className='text-blue-600 hover:underline'
                            >
                                Sign in
                            </a>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </FieldGroup>
        </form>
    );
}
