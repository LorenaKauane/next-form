'use client';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { TSignUpSchema, signUpSchema } from '@/lib/type';
import { zodResolver } from '@hookform/resolvers/zod';

const ReactHookFormZod: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolver) => setTimeout(resolver, 1000));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          {...register('email')}
          type="email"
          id="email"
          placeholder="Email"
        />
        {errors.email && <p>{`${errors.email.message}`}</p>}
        <Input
          {...register('password')}
          type="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && <p>{`${errors.password.message}`}</p>}
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && <p>{`${errors.confirmPassword.message}`}</p>}
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReactHookFormZod;
