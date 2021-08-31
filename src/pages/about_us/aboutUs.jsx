import React, { useEffect, useState } from "react";

import Css from "./aboutUs.module.css";

export default function AboutUs() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://176.126.164.176:8000/api/aboutproject/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div className={Css.aboutUS}>
      <div className="container">
        <div className={Css.aboutBlock}>
          <span className={Css.title} >Проект жөнүндө</span>
          {data.map((item) => {
            return (
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
