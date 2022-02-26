import React from "react";

// Hooks
import { useEffect } from "react";
import { useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { getNews } from "../service/api";

// Components
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dailyNews();
  }, [page]);

  const dailyNews = async () => {
    const response = await getNews(page);
    setNews([...news, ...response.data]);
  };

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={() => setPage((prev) => prev + 1)}
      hasMore={true}
    >
      {news.map((article, ind) => (
        <Article article={article} key={ind} />
      ))}
    </InfiniteScroll>
  );
};

export default Articles;
