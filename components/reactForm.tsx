'use client';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

const ReactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(['']);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    if (confirmPassword !== password) {
      setErrors(['Password and confirm Password must match']);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolver) => setTimeout(resolver, 1000));

    setIsSubmitting(false);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div>
      <h1>Just React</h1>
      {errors &&
        errors.map((error) => (
          <p key={error} className="text-red-900 m-4">
            {error}{' '}
          </p>
        ))}
      <form onSubmit={onSubmit} className="space-y-8">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Email"
          required
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Password"
          required
        />
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReactForm;
