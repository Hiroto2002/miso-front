import React from "react";
import ArticleListPresentational from "./presentational";
import { fetchArticleList } from "../../fetcher";

const ArticleListContainer = async () => {
  const articles = await fetchArticleList();
  return <ArticleListPresentational articles={articles} />;
};

export default ArticleListContainer;
