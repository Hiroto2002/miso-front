import React from "react";
import MDField from "./components/MDField";
import { ArticleResponse } from "@/types/Respose";
import Image from "next/image";

interface DetailProps {
  params: {
    id: number;
  };
  articleData: ArticleResponse;
}

const detail = ({ params, articleData }: DetailProps) => {
  articleData = {
    id: 1,
    title: "title",
    thumbnail: "/next.svg",
    tags: ["tag1", "tag2"],
    clientName: "クライアント名",
    createdAt: "2024-11-28",
    updatedAt: "2024-11-28",
  };

  const markdownString = `
# MarkdownTitle

## MarkdownSubtitle

- list
- list
- list
- [ ] checkbox
- [x] checkbox


discription
`;
  return (
    <div className="flex relative flex-col justify-center items-center w-full h-auto m-4">
      <Image
        src={articleData.thumbnail}
        alt={articleData.title}
        width={600}
        height={300}
        className="object-cover top-0 left-0"
      />
      <h1 className="w-full">{articleData.title}</h1>
      <div className="flex flex-row justify-start items-center w-full">
        {articleData.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <p>{articleData.clientName}</p>
        <div className="flex flex-row justify-center items-center gap-4">
          <p>{articleData.createdAt}</p>
          <p>{articleData.updatedAt}</p>
        </div>
      </div>
      <h3 className="w-full">this is {params.id} detail page.</h3>
      <div className="w-full h-auto">
        <MDField markdownString={markdownString} />
      </div>
    </div>
  );
};

export default detail;