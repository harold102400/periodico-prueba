import { News } from "../interfaces/noticias/News"


const API_URL = import.meta.env.VITE_API_URL

///funciones que hacen el fetch a la api normal y por categoria con su try y catch

//tipar news con la interface correctamente para que no sea de tipo any
export const getNewsData = async () : Promise<News[]> =>  {
    try {
        const data = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        const news = await data.json()
        console.log(news)
        return news
    } catch (error) {
        return Promise.reject(error)
    }
    
    
}

//tipar news con la interface correcatamente para que no sea de tipo any
export const getNewsByCategory = async (category: string) : Promise<News[]> =>  {
    try {
        const data = await fetch(`${API_URL}?categories=${category}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        const news = await data.json()
        console.log(news)
        return news
    } catch (error) {
        return Promise.reject(error)
    }
    
    
}



