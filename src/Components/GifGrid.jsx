import GetImagen from "./getImagen"
import useGetImage from "../Hooks/useGetImage";

const GifGrid = ({categoria}) => {
    
    const {imagen, loading} = useGetImage(categoria)

    return (
        <>
        <h3>{categoria}</h3>

        { loading && <h2>Cargando...</h2> }


        <div className="card-grid" >
            {imagen.map( img => 
                <GetImagen
                key={img.id}
                {...img}
                 />
            )

            }
        </div>
            
        </>
    )
    }

export default GifGrid