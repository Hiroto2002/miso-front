// import { fetchGet } from "@/utils/fetcher";

export type ArticleResponse = {
  id: number;
  title: string;
  thumbnail: string;
  clientName: string;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
};

const articleList: ArticleResponse[] = [
  {
    id: 1,
    title: "Article 1",
    thumbnail: "https://picsum.photos/150",
    clientName: "Client 1",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    title: "Article 2",
    thumbnail: "https://picsum.photos/150",
    clientName: "Client 2",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    tags: ["tag1", "tag2"],
  },
  {
    id: 3,
    title: "Article 3",
    thumbnail: "https://picsum.photos/150",
    clientName: "Client 3",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    tags: ["tag1", "tag2"],
  },
];

export const fetchArticleList = async (): Promise<ArticleResponse[]> => {
  return articleList;
  //   try {
  //     const response = await fetchGet<ArticleResponse[]>(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     return response;
  //   } catch (e) {
  //     return {
  //       status: 500,
  //       message: `Error: ${e}`,
  //       data: [],
  //     };
  //   }
};
