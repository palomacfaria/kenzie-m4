import { z } from "zod";

export const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(2),
  price: z.number().min(0.01),
});

//pick, omit e partial com schemas
export const createProductBodySchema = productSchema.omit({ id: true });

export const editProductBodySchema = productSchema.omit({id: true}).partial()
