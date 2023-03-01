import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItemApp } from "./GifGridItemApp";
import PropTypes from 'prop-types'

export const GifGridApp = ({category}) => {

    //custom hooks
    const { images, isLoading } = useFetchGifs(category)

  return (
  <>
      
      <h4>{category}</h4>

      {
        isLoading && ( <h2>Cargando...</h2> )
      }

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

GifGridApp.propTypes = {
  category: PropTypes.string.isRequired,
}