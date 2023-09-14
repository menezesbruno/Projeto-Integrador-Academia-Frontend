import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../../css/main.css'
import Academia1 from '../../assets/foto-1.jpeg';
import Academia2 from '../../assets/foto-2.jpeg';

function Carrossel() {
  return (
         <div style={{ display: 'block', width: 'auto', padding: 30}}>
            <Carousel fade>
              <Carousel.Item interval={4000}>
                   <img className="d-block w-100" src={Academia1} alt="Image1" style={{ maxHeight: '580px' }}/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center position-absolute" >
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                          Venha conhecer a melhor
                          <br />
                          Academia de Sorocaba e Região
                        </h2>
                        <a target="_blank" href="https://www.instagram.com/pumpfit.academia/" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Junte-se a nós!</a>
                    </div>
              </Carousel.Item>
              
              <Carousel.Item interval={4000}>
                   <img className="d-block w-100" src={Academia2} alt="Image2" style={{ maxHeight: '580px' }}/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center position-absolute" >
                        <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                          Coloque o seu físico em dia !
                        </h2>
                        <a target="_blank" href="https://www.instagram.com/pumpfit.academia/" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Junte-se a nós!</a>
                    </div>
              </Carousel.Item>

            </Carousel>
          </div>
    );
}

export default Carrossel;
