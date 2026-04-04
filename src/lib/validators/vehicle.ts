import { z } from 'zod';

// UK vehicle registration validation
// Covers: current format (AB12 CDE), legacy formats, and personalised plates
export const registrationSchema = z.object({
  registration: z
    .string()
    .min(2, 'Enter a registration number')
    .max(8, 'Registration too long')
    .transform((val) => val.replace(/\s+/g, '').toUpperCase()),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
