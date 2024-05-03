import { useEffect, useState } from "react";
import {News} from '../interfaces/noticias/News'
import { getNewsData } from "./getNewsData";



export function FetchLatestPosts() {

    const API_URL = import.meta.env.VITE_API_URL
    console.log(API_URL)

    ///interface para los estados y se usa para tipar el useState
    interface AppState {
      newsState: News[]
    }

    ///hacemos un useState para almacenar los datos que vienen de la API y poder mapearlos
    const [trendingNews, setTrendingNews] = useState<AppState['newsState']>([]);



    ///hacemos un useEffect y adentro hacemos una funcion asyncrona que llama el hook que hace la conexion a la api y le agregamos la conexion a la api y le ponemos await y la guardamos dentro de una variable 
    useEffect(() => {
        const data = async() => {
          const news = await getNewsData(API_URL);
          setTrendingNews(news)
          //console.log(news)
        }
        data()
      }, [API_URL]); 

      return {trendingNews}

}
    

   