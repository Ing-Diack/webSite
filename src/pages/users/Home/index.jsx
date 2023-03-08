import React from 'react'
import carousel1  from './../../../assets/carousel4.jpg';
import cafe  from './../../../assets/cafe3.jpg';
import code1  from './../../../assets/code1.jpg';
import diack  from './../../../assets/diack.jpg';
import { Link } from 'react-router-dom';

import carousel2 from './../../../assets/carousel1.jpg';
import carousel3 from './../../../assets/carousel2.jpg';
import CardProjet from '../../../components/CardProjet';
import Competence from '../../../components/Competence';

function Home() {
    const background = {
      backgroundImage:`url(${carousel1})`,
      height:'75vh',
      backgroundRepeat:'no-repeat'
    }

  
  return (
    <main>
     
      <section className='py-5 h-100' style={background}>
        <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          <div className="col-12 col-md-6 text-white fw-md-bold  text-center">
          <h1 > Je suis Diack </h1>
          <h2>Ingénieur en Génie Logiciel 
            et Système Distribué et Développeur Full Stack
            </h2> 
            <h4 className='fw-light'> Bienvenu dans mon univers créatif</h4>
            <a href='#section3' className='btn btn-primary rounded-3'> Mon Expertise</a>
          </div>
          <div className="col-12 col-md-6">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
   
      <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100 h-100 rounded-3" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100 h-100 rounded-3 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100 h-100 rounded-3" alt="..."/>
    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
   </div>
        </div>
            </div>
        
    </div>
    
        </div>

      </section>
      <section className='py-4' id='section2' style={{
        backgroundColor:  '#1E435A'
      }}>
        <div className="container">
          <h3 className='fw-bold'>Quis suis je ? </h3>
          <div className="row mt-3 gy-4 align-items-center">
           <div className="col-12 col-md-7">
           <p className="card-text"><small className="text-muted fs-6 fs-md-5">
                    je me presente Diakalia Sidibé dit Diack , je suis Malien 🇲🇱❣️.
                            Apres mon bac au Lycée LMMS en 2017, j'ai eu une bourse d'étude du gouvernement 
                            de la République Algérienne Démocratique et Populaire 🇩🇿 pour poursuivre mes études universitaires.
                            Après avoir obtenu ma licence en Mathématiques et Informatiques (MI) en 2020,
                            j'ai décidé de me spécialiser en Informatiques plus précisement en Génie Logiciel et Systèmes Distribués ,
                            pour developper mes compétences en tout ce qui concerne les logiciels (conception , implementation et maintenance)
                            ainsi que les Systèmes Distribués ( ce sont des systèmes qui fonctionnent sur la base de la partage des resources).
                            Durant mes études de Master, j'ai décidé de suivre des formations hors universitaire dans le developpent Web afin de solidifier
                            plus encore mes compétences  en developpement Web .
                           


                      </small></p>
           </div>
           <div className="col-12 col-md-4 offset-md-1 justify-content-center">
            <img src={diack} alt=""  className='w-100 rounded-3 moi'/>
           </div>
          </div>
        </div>
      </section>
      <section className=' py-5 bg-light' id='section3'>
        <div className="container">
          <h5 className='fw-bold'>Mon Expertise</h5>
          <h6 className='fw-light'>Developpement Web</h6>
          <div className="row gy-3 mt-3">
            <div className="col-12 col-md-8">
              <Competence/>
            </div>
            <div className="col-12 col-md-4">
              <img src={code1} alt="" className='w-100 h-100'/>
              
              </div>

          </div>
        </div>

      </section>
      <section className='py-5' id='section4'
      style={{
        backgroundColor:"#BFC6C6"
      }}
      >
        <div className="container">
        <h5 className='fw-bold'>Mon Portfolio</h5>
          <h6 className='fw-light'>Projets Perso</h6>
          <div className="row mt-3 gy-3 gx-sm-2">

          <CardProjet  
          title="projet1"
          picture={carousel1}
          description="Un projet vraiment prometeur 
                      il faut faire pour participer à ce projet "
                      lien="https://github.com/Ing-Diack/diackalia.git"
          />

<CardProjet  
          title="projet1"
          picture={carousel1}
          description="Un projet vraiment prometeur 
                      il faut faire pour participer à ce projet "
                      lien="https://github.com/Ing-Diack/diackalia.git"
          />

<CardProjet  
          title="projet1"
          picture={carousel1}
          description="Un projet vraiment prometeur 
                      il faut faire pour participer à ce projet "
                      lien="https://github.com/Ing-Diack/diackalia.git"
          />

<CardProjet  
          title="projet1"
          picture={carousel1}
          description="Un projet vraiment prometeur 
                      il faut faire pour participer à ce projet "
                      lien="https://github.com/Ing-Diack/diackalia.git"
          />
          </div>
        </div>
      </section>
      <section className='bg-light py-5'>
        <div className="container">
        <h5 className='fw-bold'>Un projet de création Web</h5>
          <h6 className='fw-light'>Allons en discuter autour d'un café </h6>
          <div className="row mt-4 gy-5"  id='section5'>
             <div className="col-12 col-md-5">
            <img src={cafe} alt="" className='w-100 rounded-3 shadow-lg'/>
          </div>
          <div className="col-12 col-md-6 offset-md-1">
          <form action="">
            <div className="row">
              <div className="col-6">
                <label htmlFor="name" className='form-label'>Nom</label>
                <input type="text" name='name' className='form-control' />
              </div>
              <div className="col-6">
              <label htmlFor="surName" className='form-label'>Prenom</label>
                <input type="text" name='surName' className='form-control' />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
              <label htmlFor="email" className='form-label'>Address Mail</label>
                <input type="text" name='email' className='form-control' />
              </div>
            </div>
            <div className="row mt-2 ">
              <div className="col-12">
                <label htmlFor="textAreaName">Message</label>
                <textarea name="textAreaName" id="" className='form-control' rows="4"></textarea>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <button type='button' className='btn btn-primary w-100'>Envoyer</button>
              </div>
            </div>
          </form>
        </div>
          </div>
         
        </div>
        
         
      </section>

        <footer className='py-3  border-top ' 
        style={{
          backgroundColor:'#7496AC'
        }}>
          <div className="container"
          >
            <div className="row gy-3 gy-md-0 align-items-center ">
              <div className="col-12 col-md-4 ">
              <Link to="/" className="navbar-brand text-uppercase fw-bold"   >
              <span className='text-white'>
               ABKF_TECH</span>
            </Link>
              </div>
              <div className="col-12 col-md-4">
              <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Mention Legales
                    </button>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Facilis suscipit unde vero, ipsa nam repudiandae, asperiores 
                          voluptate iusto vel doloremque cupiditate aut sed eaque quaerat
                           porro hic incidunt praesentium dolor.
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Facilis suscipit unde vero, ipsa nam repudiandae, asperiores 
                          voluptate iusto vel doloremque cupiditate aut sed eaque quaerat
                           porro hic incidunt praesentium dolor.
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Facilis suscipit unde vero, ipsa nam repudiandae, asperiores 
                          voluptate iusto vel doloremque cupiditate aut sed eaque quaerat
                           porro hic incidunt praesentium dolor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-12 col-md-4 text-md-end">
              <ul className='list-inline'>
                  <li className='list-inline-item bg-light rounded-pill p-2'>
                  <a href="https://www.linkedin.com/in/diakalia-sidibe-236478247/" className='text-decoration-none text-dark' data-bs-toggle="tooltip" title='LinkedIn'>
                  <i className="fab fa-linkedin fa-1.5x text-primary"></i>
                  </a>
                  </li>
                  <li className='list-inline-item bg-light rounded-pill p-2'>
                  <a href="https://m.facebook.com/home.php?ref_component=mfreebasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&paipv=0&eav=AfYCsd_NgTPCCfvnOAc1IlH1wP4ndX3HP7Sqq-b8SIx6jKhNxyEz1mCdtPNhmXRgdXs&tbua=1&_rdr" className='text-decoration-none text-dark' data-bs-toggle="tooltip" title='facebook'>
                  <i className="fab fa-facebook fa-1.5x text-primary"></i>
                  </a>
                  </li>
                  <li className='list-inline-item bg-light rounded-pill p-2'>
                  <a href="https://www.instagram.com/diacksidibe500/?hl=fr" className='text-decoration-none text-dark' data-bs-toggle="tooltip" title='instagram'>
                  <i className="fab fa-instagram fa-1.5x text-danger"></i>
                  </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </footer>
    </main>
  )
}
export default Home