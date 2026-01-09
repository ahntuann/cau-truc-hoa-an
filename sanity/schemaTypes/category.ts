// src/sanity/schemaTypes/category.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "category", // Tên dùng trong code
  title: "Danh mục sản phẩm", // Tên hiển thị trong Admin
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tên danh mục",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn (Slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Hình ảnh đại diện",
      type: "image",
      options: {
        hotspot: true, // Cho phép cắt ảnh
      },
    }),
    defineField({
      name: "price_text",
      title: "Chữ hiển thị giá (VD: Liên hệ)",
      type: "string",
      initialValue: "Liên hệ",
    }),
  ],
});
