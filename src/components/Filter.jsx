/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  // ** เมื่อ State ของ activeGenre มีการเปลี่ยนแปลง ให้ useEffect ทำงาน
  useEffect(() => {
    if (activeGenre === 0) {
      // active === 0
      return setFiltered(popular); // set Data หนังทั้งหมดลงใน filtered
    }
    // active != 0
    const filtered = popular.filter(
      (movie) => movie.genre_ids.includes(activeGenre) // * filter genre_ids #[35, 1] ที่มีค่า เหมือน 35 or 28 ใน array โดยใช้ includes ที่ retrun เป็น boolean
    );
    return setFiltered(filtered); // set Data ที่ผ่านก่ร filter ลงใน filtered
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        className={`${activeGenre === 0 ? "active" : ""}`}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={`${activeGenre === 35 ? "active" : ""}`}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={`${activeGenre === 28 ? "active" : ""}`}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
