import { z } from 'zod';

export const useAdSchema = z.object({
  name: z.string(),
  price: z.number(),
  category: z.string(),
  brand: z.string(),
  size: z.string(),
});

export type UseAd = z.infer<typeof useAdSchema>;
