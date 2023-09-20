import fetchLatestPosts from "../../hooks/fetchLatestPosts";
import './Home.css'

const Home = () => {
  const {latestNews } = fetchLatestPosts()

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
