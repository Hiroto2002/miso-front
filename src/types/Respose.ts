export type ArticleResponse = {
  id: number;
  title: string;
  thumbnail: string;
  clientName: string;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
};
