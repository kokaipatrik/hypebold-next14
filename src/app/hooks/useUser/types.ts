import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 character!'),
});

export type SignIn = z.infer<typeof signInSchema>;
