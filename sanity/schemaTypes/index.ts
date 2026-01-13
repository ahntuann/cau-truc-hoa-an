import { type SchemaTypeDefinition } from "sanity";
import category from "./category"; // Import file vừa tạo
import product from "./product";
import introduction from "./introduction";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product, introduction], // Thêm category vào danh sách
};
