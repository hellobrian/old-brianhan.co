export default {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Content",
      name: "content",
      type: "markdown",
    },
    {
      title: "Published",
      name: "isPublished",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Tags",
      type: "array",
      name: "tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.unique(),
    },
  ],
};
