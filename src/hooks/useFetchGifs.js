import { useEffect, useState } from "react";
import { getGifs } from '../helpers/GetGifs'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {

        const newImages = await getGifs(category);
        setImages(newImages);       
        setIsLoading(false);
    }

    /*El useEffect se dispara como un efecto secundario cuando un 
    elemento dentro de la lista cambia.
    useEffect(funcion, lista)*/
    useEffect( () => {
        getImages();
    }, [ ] )

    return {
        images: images,
        isLoading: false
    }

}
