import React from 'react'
import "./portfolios.css"
import { Data } from './Data'

export const Portfolios = () => {
  return (
    <section className="portfolios section">
        <div className="portfolios__container container">
            <div className="qualification__header subheader">
            <h2 className="section__title">Portfolios</h2>
            <span className="section__subtitle">Projects</span>
            </div>
            <div className="portfolios__body">
                {Data.map((dt,index)=> {
                    return <div className="portfolios__content-container" key={index}>
                    <h3>{dt.name}</h3>
                    <img src={dt.image} className="portfolios__content-header"/>
                    <div className="portfolios__content-body">{dt.description}</div>
                    <div className="portfolios__content-footer">
                        <a href={dt.url} className='portfolios__content-footer-box'>Website</a>
                        <a href={dt.github} className='portfolios__content-footer-box'>Code</a>
                    </div>
                </div> 
                })}
            </div>
        </div>
    </section>
  )
}
