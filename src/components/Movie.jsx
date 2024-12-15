/* eslint-disable react/prop-types */
// * Create Filter Animation
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
      <h2>{movie.original_title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
    </motion.div>
  );
};

export default Movie;
