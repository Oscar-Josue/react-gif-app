import {useState} from 'react';
import AddCategory from './Components//AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Piece'] );

    const agregarCAtegorias = (newCategory)=> {
        setCategorias( (cat) => [ newCategory ,...cat] )
    }

        return (
            <>
            <h1>Giphy App</h1>
            
            <AddCategory 
                // setCategorias={setCategorias}
                onNewCategory={agregarCAtegorias}
            />

            {categorias.map( (categoria) => 
            <GifGrid
                key={categoria}
                categoria={categoria}
            />
            )}


            </>
        )
}

export default GifExpertApp