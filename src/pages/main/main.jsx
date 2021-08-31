import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import {ArrowRightOutlined }  from '@ant-design/icons' 
import Css from "./main.module.css"


export default function Main() {
    const [t, setT] = useState({})
    const UpdateTime = () => {
        let date = new Date;
        let d1 = new Date(); //"now"
        let d2 = new Date("2021/04/29");  // some date
        let diff = Math.abs(d1-d2);
        let day = Math.floor(diff / (24*60*60*1000))
        let time = {
            day: day,
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        }
        setT(time)
    }
    useEffect(() => {
        UpdateTime()
        setInterval(() => UpdateTime(), 1000)
    }, [])




    return (
        <div className={Css.container}>
            <h1 className={Css.question1}>“Убаданы берген эмес, аны аткарган улук”</h1>
            <h3>29 - АПРЕЛЬДЕН БЕРИ</h3>
            <div className={Css.container_time}>
                <div className={Css.box_time}>
                    <p>{t?.day}</p>
                    <p>күн</p>
                </div>
                <div className={Css.box_time}>
                    <p>{t?.hours}</p>
                    <p>саат</p>
                </div>
                <div className={Css.box_time}>
                    <p>{t?.minutes}</p>
                    <p>мүнөт</p>
                </div>
                <div className={Css.box_time}>
                    <p>{t?.seconds}</p>
                    <p>секунд</p>
                </div>
            </div>
            <h3>УБАКЫТ ӨTTҮ</h3>
            <p className={Css.question2}>БАТКЕНГЕ БЕРИЛГЕН<br/>УБАДА АТКАРЫЛАБЫ?</p>
           
           <Link to="/news"><h2 className={Css.link}>Кененирээк билүү үчүн <ArrowRightOutlined /></h2></Link> 
        </div >
    )
}
