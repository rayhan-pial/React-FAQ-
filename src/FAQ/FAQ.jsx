import React, { useState } from 'react';

import style from './faq.module.css';

export default function faq({id,title,desc}) {

    const [togle, setTogle] = useState(true)


  return (
    <article >
        <div className={style.cardHeader}>
            <h4 className={style.cardTitle}>{title}</h4>
            <button className={style.cardButton} onClick={()=>{
                setTogle(!togle)
            }}>
                {togle ? '-':'+'}
            </button>
        </div>
        {togle && <p className={style.cardDescription}>{desc} </p>}

    </article>
  )
}
