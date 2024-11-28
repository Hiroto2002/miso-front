export type DBResponse<T> = {
  message: string;
  data: T;
  status: number;
};

export type ArticleResponse = {
  id: number;
  title: string;
  thumbnail: string;
  clientName: string;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
};