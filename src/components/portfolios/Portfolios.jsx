import React from 'react'
import "./portfolios.css"
import { Data } from './Data'

export const Portfolios = () => {
  return (
    <section className="portfolios section" id='portfolio'>
        <div className="portfolios__container container">
            <div className="qualification__header subheader">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Projects</span>
            </div>
            <div className="portfolios__body">
                {Data.map((dt,index)=> {
                    return <div className="portfolios__content-container" key={index}>
                    <h3 className='portfolios__content-title'>{dt.name}</h3>
                    <a href={dt.url} className="portfolios__content-url" target="_blank">
                    <img src={dt.image} className="portfolios__content-image"/>
                    <div className="overlay">
                    <i className='bx bx-add-to-queue bx-md'></i>
                    </div>
                    </a>
                    <div className="portfolios__content-body">{dt.description}</div>
                    <div className="portfolios__content-footer">
                        <a href={dt.url} className='portfolios__content-footer-box portfolios__content-footer-box-left' target='_blank'>
                        <i className='bx bx-world bx-sm icon'></i>
                            Website</a>
                        <a href={dt.github} className='portfolios__content-footer-box portfolios__content-footer-box-right' target='_blank'>
                        <i className='bx bxl-github bx-sm icon'></i>
                        Github</a>
                    </div>
                </div> 
                })}
            </div>
        </div>
    </section>
  )
}
