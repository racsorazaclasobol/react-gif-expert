import PropTypes from 'prop-types';

export const GifGridItemApp = ({id, title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p> 
    </div>
  )
}

GifGridItemApp.propTypes = {

  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired

}
