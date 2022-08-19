import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItemApp } from "./GifGridItemApp";

export const GifGridApp = ({category}) => {

    //custom hooks
    const { images, isLoading } = useFetchGifs(category)

  return (
  <>

      {
        isLoading && ( <h2>CARGANDO....</h2> )
      }
      <h4>{category}</h4>
      

      <div className="card-grid">
        { images.map( (image) => (
            //El {...image} sirve para propagar todas las properties dentro del elemento image
            <GifGridItemApp key={image.id} {...image} />
        )) 
        }
      </div>
  </>
)
}