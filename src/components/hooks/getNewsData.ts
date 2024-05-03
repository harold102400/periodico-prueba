import { News } from "../interfaces/noticias/News"

export async function getNewsData(url: string) {
    const data = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const news: News[] = await data.json()
    console.log(news)
    //tipar news con la interface correcatamente para que no sea de tipo any
    return news
}


