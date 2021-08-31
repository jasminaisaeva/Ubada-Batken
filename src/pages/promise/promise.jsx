import React, { useState, useEffect } from "react";
import PromiseCard from "../../components/promise_card/promiseCard";

import Css from "./promise.module.css";



export default function Promise() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [active, setActive] = useState(1);
  const limit = 8;
  const getPromises = (page = 0) => {
    setActive(page);
    fetch(
      `http://176.126.164.176:8000/api/promises/?limit=${limit}&offset=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.count < limit) {
          setPages(1);
        } else {
          setPages(Math.ceil(data.count / limit));
        }
        setData(data.results);
      });
  };
  useEffect(() => {
    getPromises();
  }, []);
  
  return (
    <div>
       <div className={Css.Block}>
      <div className="container">
       
          <p className={Css.title}>Убадалар</p>
          {/* <ul className={Css.list}>
            <li>Баардыгы</li>
            <li>Процессте</li>
            <li>Бүттү</li>
            <li>Бүткөн жок</li>
          </ul> */}
          <div className={Css.container}>
            {data.map((item) => {
              return <PromiseCard data={item} key={data.id} />;
            })}
          </div>
         
         
        </div>
      </div>
      {/* <Pagination
            active={active}
            getEducation={getPromises}
            pages={pages}
           
          /> */}
    </div>
  );
}
