import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Sản phẩm",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tên sản phẩm",
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
      title: "Hình ảnh sản phẩm",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "price",
      title: "Giá hiển thị",
      type: "string",
      initialValue: "Liên hệ", // Mặc định là Liên hệ như bạn muốn
    }),
    defineField({
      name: "description",
      title: "Mô tả ngắn",
      type: "text", // Chỉ lưu text đơn giản
      rows: 3,
    }),
    // QUAN TRỌNG NHẤT: TRƯỜNG LIÊN KẾT VỚI CATEGORY
    defineField({
      name: "category",
      title: "Thuộc danh mục",
      type: "reference", // Loại tham chiếu
      to: [{ type: "category" }], // Trỏ tới bảng category
      validation: (rule) => rule.required(),
    }),
  ],
});
