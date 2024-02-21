
import PropTypes from "prop-types";
import {Link} from "react-router-dom"; //Link를 통해 a 역할 대체

function Movie({id, coverImg, title, summary, genres})
{
  return (
    <div>
      <img src={coverImg} alt ={title}></img> 
      <h2>
        <Link to ={`/movie/${id}/${id + 1}`}>{title}</Link>
      </h2> 
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li> 
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;