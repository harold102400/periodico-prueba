import axios from "axios";
import React, { useState, useEffect } from 'react';
import './Internacional.css'

const baseURL = "https://apitest.rdedigital.com/api/v1/posts";
interface News {
  id: number;
  title: {
    rendered: string;
  };
  media: string;
  content: {
    rendered: string;
  };
  category: string;
}

const Internacional = () => {
  const [categoryNews, setCategoryNews] = useState<News[]>([]);

  useEffect(() => {
    axios.get<News[]>(baseURL)
      .then((response) => {
        const newsWithCleanedContent = response.data.map(news => ({
          ...news,
          content: {
            rendered: news.content.rendered
              .replace(/<[^>]*>/g, "") 
              .replace(/&nbsp;/g, " "), 
          },
        }));
        setCategoryNews(newsWithCleanedContent);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  const filteredNews = categoryNews.find(news => news.category === "Internacional");
console.log(filteredNews)
  return (
    <div className="one-news-container">
      {filteredNews ? (
        <div key={filteredNews.id} className="news-card-container">
          {filteredNews.media && (
            <img src={filteredNews.media} className="news-media" />
          )}
          <div className="news-sub-container">
            {filteredNews.title && (
              <h1 className="one-news-title">{filteredNews.title.rendered}</h1>
            )}
            {filteredNews.content && (
              <p className="one-news-content">{filteredNews.content.rendered}</p>
            )}
          </div>
        </div>
      ) : (
        <div>No se encontraron noticias</div>
      )}
    </div>
  );
}

export default Internacional;
