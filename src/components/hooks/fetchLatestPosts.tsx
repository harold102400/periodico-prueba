import { useEffect, useState } from "react";
import axios from 'axios';
import {News} from '../interfaces/noticias/News'


function fetchLatestPosts() {

    const [latestNews, setLatestNews] = useState<News[]>([]);

    useEffect(() => {
        axios.get<News[]>('https://apitest.rdedigital.com/api/v1/latestPost')
          .then((response) => {
            const newsWithCleanedContent = response.data.map(news => ({
              ...news,
              content: {
                rendered: news.content.rendered
                  .replace(/<[^>]*>/g, "") 
                  .replace(/&nbsp;/g, " "), 
              },
            }));
            setLatestNews(newsWithCleanedContent);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []); 

      return {latestNews}

}
    
export default fetchLatestPosts;
   