const bookSchema = {
  name: "book",
  type: "document",
  title: "book",
  fields: [
    {
      name: "name",
      type: "string",
      title: "name",
    },
    {
      name: "price",
      type: "number",
      title: "price",
    },
    {
      name: "auther",
      type: "string",
      title: "Auther",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      description: "The slug of the book post.",
    },
    {
      name: "image",
      type: "image",
      title: "image",
      description: "The image of the auther.",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
      description: "The heading of the book.",
    },
    {
      name: "content",
      type: "string",
      title: "content",
      description: "The content of the book.",
    },
  ],
};

export default bookSchema;
