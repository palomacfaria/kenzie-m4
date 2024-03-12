import { z } from "zod";

export const createProductBodySchema = z.object({
  name: z.string().min(2),
  price: z.number().min(0.01),
});
