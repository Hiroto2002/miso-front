import React from "react";
import { ArticleResponse } from "../../fetcher";
import { Flex } from "@/components/ui/flex";
import Image from "next/image";
import Link from "next/link";

type Props = {
  articles: ArticleResponse[];
};
const ArticleListPresentational = ({ articles }: Props) => {
  return (
    <Flex direction={"column"}>
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/articles/${article.id}`}
          className="w-full p-4 border border-gray-200"
        >
          <Flex key={article.id} justify={"start"} className="w-full">
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={200}
              height={200}
            />
            <Flex
              direction={"column"}
              className="w-[calc(100%-200px)] p-4 h-[200px] gap-4"
            >
              <h2 className="text-xl font-bold">{article.title}</h2>
              <ul className="flex">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="mr-2 px-2 py-1 bg-gray-200 rounded-md"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <Flex>
                <p className="text-sm">{article.clientName}・</p>
                <p className="text-sm">
                  {article.updatedAt ? article.updatedAt : article.createdAt}
                </p>
              </Flex>
            </Flex>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};

export default ArticleListPresentational;
