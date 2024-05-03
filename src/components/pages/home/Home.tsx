// /import { useState } from "react";
import {FetchLatestPosts} from "../../hooks/fetchLatestPosts";
import './Home.css'

const Home = () => {
  const {trendingNews } = FetchLatestPosts()
  //const [isLoading, setIsLoading] = useState<boolean>(true);
  
  console.log(trendingNews)
  //const randomElements = trendingNews.sort( function() { return 0.5 - Math.random() } );//const randomElement = trendingNews[Math.floor(Math.random() * trendingNews.length)];  
  //console.log({randomElements})
/*   if (trendingNews) {
    setIsLoading(false);
  } */

  return (
    <div className="news-container">
      {/* {isLoading && <div>Cargando...</div>} */}
      {trendingNews.sort( function() { return 0.5 - Math.random() } ).map(news => (
        <div key={news.id} className="card-container">
          <img src={news.jetpack_featured_media_url} className="ilustration"/>
          <div className="news-info-container">
          <h1 className="news-title">{news.title.rendered}</h1>
          <p className="news-content" dangerouslySetInnerHTML={{__html: news.excerpt.rendered}}></p>
          <a className="learn_more" href={news.link}>Saber más</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
