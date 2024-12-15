// ตัวอย่างการทำ Filter

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Filter from "./components/Filter";

// * Create Filter Animation
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]); // Data ของหนังทั้งหมด
  const [filtered, setFiltered] = useState([]); // Data ของหนังที่ filter แล้ว
  const [activeGenre, setActiveGenre] = useState(0); // Action เพื่อเลือกประเภทของหนัง

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDE2ODY1YWM5ZjZjNjEwNDA5YmUxODU0NTMwMjQ1MSIsIm5iZiI6MTczNDI2MTkxMy4yNzIsInN1YiI6IjY3NWViYzk5MjA0ZjNiNWI0ODMwMzkwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ch69BShkpTo7XrH3i3R6DlkgpSHS8HMMB6-eQ3VPFI",
    },
  };

  // Function Fetch Movie Data!
  const fectPopular = async () => {
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setPopular(res.results); // setData Movie ลงใน popular
        setFiltered(res.results); // setData Movie ลงใน filtered
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fectPopular();
  }, []);

  console.log(filtered);

  return (
    <>
      <div>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {filtered.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;
