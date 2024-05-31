import { newsByCategory } from "../../services/newsPosts";
import notFound from '../../../assets/notfound.png'
import '../pagesStyles/stylesforpages.css'

const Tecnologia = () => {
  const categoryNews = newsByCategory("96");
  return (
    <div className="one-news-container">
       {categoryNews.isLoading && <div>Cargando...</div>}
    { categoryNews.data &&
      categoryNews.data.slice(0,2).map(news => 
        news ? (
          <div key={news.id} className="news-card-container">
              <img src={news.jetpack_featured_media_url} className="news-media" />
            <div className="news-sub-container">
                <h1 className="one-news-title">{news.title.rendered}</h1>
                <p className="one-news-content" dangerouslySetInnerHTML={{__html: news.excerpt.rendered}}></p>
            </div>
          </div>
        ) : (
            <div className='notfound-container'>
              <img src={notFound} className="notfound-media" />
              <h1 className='notfound-title'>No se encontraron noticias</h1>
            </div>
        )
  
      )
    }
    </div>
  );
}

export default Tecnologia;
