import { Config } from "./CMS";

const config: Config = {
  backend: { name: "git-gateway", branch: "main" },
  site_url: "http://example.com",
  logo_url: "/next.svg",
  // search: false,
  slug: {
    encoding: "ascii",
    clean_accents: true,
  },
  media_folder: "public/images",
  public_folder: "/images",
  locale: "fr",
  collections: [
    {
      name: "pages",
      icon: "page",
      identifier_field: undefined,
      label: "Pages",
      label_singular: "Page",
      folder: "content/pages",
      format: "frontmatter",
      create: true,
      fields: [
        { label: "Layout", name: "layout", widget: "hidden", default: "page" },
        { label: "Titre", name: "title", widget: "string" },
        { label: "Image Principale", name: "featuredImage", widget: "image" },
        { label: "Contenu", name: "body", widget: "markdown" },
      ],
      sortable_fields: {
        default: { field: "title", direction: "Ascending" },
        fields: ["title"],
      },
    },
    {
      name: "config",
      icon: "settings",
      label: "Configuration",
      delete: false,
      editor: { preview: false },
      files: [
        {
          name: "general",
          label: "Général",
          file: "content/config.json",
          description: "General site settings",
          fields: [
            { label: "Site title", name: "site_title", widget: "string" },
            {
              label: "Site description",
              name: "site_description",
              widget: "string",
            },
            {
              label: "Site keywords",
              name: "site_keywords",
              widget: "list",
              summary: "{{fields.keyword.keyword}}",
              fields: [{ label: "Keyword", name: "keyword", widget: "string" }],
            },
          ],
        },
      ],
    },
  ],
};

export default config;
