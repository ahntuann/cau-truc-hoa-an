import { type SchemaTypeDefinition } from "sanity";
import category from "./category"; // Import file vừa tạo
import product from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product], // Thêm category vào danh sách
};
