import React from 'react'

function CardProjet({title,picture,description,lien}) {
  return (
    <div className=' col-12 col-sm-6 col-md-4 col-lg-3'>
      <div className="card">
              <img src={picture} alt=""  className='card-img-top'/>
              <div className="card-body">
                  <h3 className='card-title' >{title}</h3>
                  <p className="card-text">
                      {description}
                  </p>
                  
                    <a href={lien} className="nav-link bg-secondary rounded-3 fs-5">
                  <i className="fa-brands fab fa-github fa-2x me-3 text-primary"></i>
                    GitHub</a>
                  
                
              </div>
    </div>
      
      </div>
  )
}

export default CardProjet;