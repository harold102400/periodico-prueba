import { latestNews } from "../../services/newsPosts";
import './Home.css'

const Home = () => {
  const latestNewsData = latestNews();
  
  return (
    <div className="news-container">
      {latestNewsData.isLoading && <div>Cargando...</div>}
      {latestNewsData.data && latestNewsData.data.sort( function() { return 0.5 - Math.random() } ).map(news => (
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
