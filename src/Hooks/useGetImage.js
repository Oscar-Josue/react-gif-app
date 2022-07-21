import { useEffect, useState } from "react";
import { getGifts } from "../Helpers/getGifts";



const useGetImage = (categoria) => {

    const [imagen, setImagen] = useState([]);
    const [loading, setLoading] = useState(true)

    const getImages = async() => {
        const nuevaImagen = await getGifts(categoria);
        setImagen(nuevaImagen);
        setLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
    

    return {
        imagen,
        loading
    }
}

export default useGetImage