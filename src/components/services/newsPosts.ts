import { useQuery } from "@tanstack/react-query"
import { getNewsByCategory, getNewsData } from "./newsFetchFn"

export const latestNews = () => {
    return useQuery({
        queryKey: ['news'],
        queryFn: getNewsData,
    });
};

export const newsByCategory = (category: string) => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => getNewsByCategory(category),
    });
};

//funciones usando la libreria tanstack que reciben las funciones que hacen el fetch a la api de noticias que se pueden usar en un componente