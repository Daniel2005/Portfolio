import React from 'react'
import "./portfolio.css"
import Nike from '../../assets/nike-project.png';
import Work1 from '../../assets/work1.jpg';

const Portfolio = () => {
  return (
    <section className="about section" id="portfolio">
      <h2 className="section__title">
        Portfolio
      </h2>
      <span className="section__subtitle">
        Most recent work
      </span>

    
      <div className="project__container container grid">
    <div className='container portfolio__box'>   
        <div className='container portfolio__container'>
          <div className='image__preview'>
        <a target="_blank" href="https://daniel2005.github.io/Nike/"><img src={Nike} alt="" className="project__img" /> 
        </a>
        </div>
        <h3 className='website__name'>Nike</h3>
        <a className='button-icon' target="_blank" href="https://daniel2005.github.io/Nike/">Demo<i className="bx bx-right-arrow-alt arrow-link"></i></a>
        </div>
    </div>

    <div className='container portfolio__box'>
    <div className='container portfolio__container'>
          <div className='image__preview'>
        <a target="_blank" href=""><img src={Work1} alt="" className="project__img" /> 
        </a>
        </div>
        <h3 className='website__name'>Coming Soon</h3>
        <a className='button-icon' target="_blank" href="">Demo<i className="bx bx-right-arrow-alt arrow-link"></i></a>
        </div>
      </div>

      <div className='container portfolio__box'>   
      <div className='container portfolio__container'>
          <div className='image__preview'>
        <a target="_blank" href=""><img src={Work1} alt="" className="project__img" /> 
        </a>
        </div>
        <h3 className='website__name'>Coming Soon</h3>
        <a className='button-icon' target="_blank" href="">Demo<i className="bx bx-right-arrow-alt arrow-link"></i></a>
        </div>
    </div>

    <div className='container portfolio__box'>
    <div className='container portfolio__container'>
          <div className='image__preview'>
        <a target="_blank" href=""><img src={Work1} alt="" className="project__img" /> 
        </a>
        </div>
        <h3 className='website__name'>Coming Soon</h3>
        <a className='button-icon' target="_blank" href="">Demo<i className="bx bx-right-arrow-alt arrow-link"></i></a>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Portfolio