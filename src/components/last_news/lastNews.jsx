import React, { useState, useEffect } from "react";

import Css from "./lastNews.module.css"
import LastNewsCard from './last_newscard/lastNewsCard'

export default function LastNews() {
    const [data, setData] = useState([ ])
    useEffect(() => {
      fetch('http://176.126.164.176:8000/api/news/')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
    }, [])
    return (
        <div className={Css.news_block}>
            <div className="container">
            <p className={Css.news_title}>Акыркы кабарлар </p>
            <div className={Css.container}>
                {
                    data.map((item) => {
                        return  <LastNewsCard data={item}/>
                    })
                }
           
            </div>

            </div>
           
        </div>
    )
}
