/* export interface IProduct{
    id: number;
    name: string;
    price: number;
} */

import { z } from "zod";
import {
  createProductBodySchema,
  editProductBodySchema,
  productSchema,
} from "../schemas/createProductBody.schema";

export type TProduct = z.infer<typeof productSchema>;

export type TCreateProductBody = z.infer<typeof createProductBodySchema>;

export type TEditProductBody = z.infer<typeof editProductBodySchema>;
