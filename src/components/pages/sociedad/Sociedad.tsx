import useFetchData from "../../hooks/useFetchData";
import notFound from '../../../assets/notfound.png'
import '../pagesStyles/stylesforpages.css'

const Sociedad = () => {
  const {filteredNews } = useFetchData("Sociedad")
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
        <div className='notfound-container'>
          <img src={notFound} className="notfound-media" />
          <h1 className='notfound-title'>No se encontraron noticias</h1>
          </div>
      )}
    </div>
  );
}

export default Sociedad;
