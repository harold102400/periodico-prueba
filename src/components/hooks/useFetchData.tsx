import { useEffect, useState } from "react";
import axios from 'axios';
import {News} from '../interfaces/noticias/News'


function useFetchData(category: string) {

    const [categoryNews, setCategoryNews] = useState<News[]>([]);
    const filteredNews = categoryNews.find(news => news.category === category);


    useEffect(() => {
        axios.get<News[]>(`https://apitest.rdedigital.com/api/v1/posts/category/${category}`)
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

      return {categoryNews, filteredNews}

}
    
export default useFetchData;
   