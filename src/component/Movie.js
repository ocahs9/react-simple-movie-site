
import PropTypes from "prop-types";
import {Link} from "react-router-dom"; //Link를 통해 a 역할 대체
import styles from "./Movie.module.css"; //style 적용

function Movie({id, coverImg, title, year, summary, genres})
{
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt ={title} className={styles.movie_img}></img> 
      <h2 className={styles.movie_title}>
        <Link to ={`/movie/${id}/${id + 1}`}>{title}</Link> {/*신기하게 태그 상 a로 인식됨 */}
      </h2> 
      <h3 className={styles.movie_year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0,235)}...(생략)` : summary}</p>
      <ul className={styles.movie_genres}>
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