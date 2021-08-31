import React, { useEffect, useState } from "react";
import css from "./pagination.module.css";
import back from "../../assets/img/back.png";
import next from "./../../assets/img/next.png";

function Pagination(props) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= props.pages; i++) {
      setPages((prev) => [...prev, i]);
    }
  }, [props.pages]);
  return (
    <div className={css.wrapper}>
      <div className="container">
        <button className={css.btn}>
          <img src={back} alt="<" />
        </button>
        {pages.map((item) => (
          <div
            className={props.active === item - 1 ? css.active : ""}
            onClick={() => props.getEducation(item - 1)}
            
          >
            {item}
          </div>
        ))}
        <button className={css.btn}>
          <img src={next} alt=">" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
