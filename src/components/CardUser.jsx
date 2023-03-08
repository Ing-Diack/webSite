import React from 'react'
import logoUser from '../assets/user-solid.svg';

function CardUser({username,message}) {
  return (
    <div>
        <div className="card">
            <img src={logoUser} className='card-img-top' alt="" />
            <div className="card-body">
                <h3 className='card-title'>{username}</h3>
                <p className='card-text'>
                    {message}
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default CardUser