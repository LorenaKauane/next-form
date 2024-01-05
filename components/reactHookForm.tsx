'use client';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { FieldValues, useForm } from 'react-hook-form';

const ReactHookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolver) => setTimeout(resolver, 1000));
    reset();
  };

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          {...register('email', {
            required: 'E-mail is required',
          })}
          type="email"
          id="email"
          placeholder="Email"
        />
        {errors.email && <p>{`${errors.email.message}`}</p>}
        <Input
          {...register('password', {
            required: 'Password is required',
          })}
          type="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && <p>{`${errors.password.message}`}</p>}
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: 'Confirm Password is required',
            validate: (value) =>
              value === getValues('password') ||
              'Password and confirm Password must match',
          })}
        />
        {errors.confirmPassword && <p>{`${errors.confirmPassword.message}`}</p>}
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReactHookForm;
