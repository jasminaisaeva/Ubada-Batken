import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Css from "./facts.module.css";


export default function Facts({ duration }) {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getEducation = () => {
    fetch(
      `http://176.126.164.176:8000/api/${
        duration ? duration : "education"
      }/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };
  useEffect(() => {
    getEducation();
  }, []);
  return (
    <div className={`${Css.container}`}>
      <div className="container">
        <p className={Css.title}>{data?.head}</p>
       <br/>

        <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
      </div>
    </div>
  );
}
