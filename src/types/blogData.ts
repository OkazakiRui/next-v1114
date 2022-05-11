type MicroCMS<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type BlogData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  favorite: boolean;
  body: string;
};

export type MicroCMSBlogData = MicroCMS<BlogData>;
