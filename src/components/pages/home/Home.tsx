import axios from "axios";
import React, { useState, useEffect } from 'react';
import './Home.css'

const baseURL = "https://apitest.rdedigital.com/api/v1/latestPost";
interface News {
  id: number;
  title: {
    rendered: string;
  };
  media: string;
  content: {
    rendered: string;
  };
}

const Home = () => {
  const [latestNews, setLatestNews] = useState<News[]>([]); // Initialize latestNews as an empty array

  useEffect(() => {
    axios.get<News[]>(baseURL)
      .then((response) => {
        // Replace HTML tags in the content before setting the state
        const newsWithCleanedContent = response.data.map(news => ({
          ...news,
          content: {
            rendered: news.content.rendered
            .replace(/<[^>]*>/g, "") // Remove HTML tags
            .replace(/&nbsp;/g, " "), // Remove HTML tags
          },
        }));
        setLatestNews(newsWithCleanedContent);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount in class components
console.log(latestNews)
  return (
    <div className="news-container">
      {latestNews.map(news => (
        <div key={news.id} className="card-container">
          <img src={news.media} className="ilustration"/>
          <div className="news-info-container">
          <h1 className="news-title">{news.title.rendered}</h1>
          <p className="news-content">{news.content.rendered}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
