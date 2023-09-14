import React from 'react';
import * as S from './style';
import image1 from '../../assets/slide1.png';
import image2 from '../../assets/slide2.jpeg';
import image3 from '../../assets/slide3.jpeg';
import image4 from '../../assets/slide4.jpg';
import image5 from '../../assets/slide5.jpeg';
import LogoMaster from '../../assets/logo_master.png';
import BackgroundSlider from '../../lib/BackgroundSlider'

export default function index() {

  return (
        <S.Container>        
              <S.ContainerInfo>    
                  <img src={LogoMaster} alt='logo'/>
                  <h2 className='display-4 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize'>Venha conhecer a melhor Academia de Sorocaba e Região</h2>
                  <a target="_blank" href="https://www.instagram.com/pumpfit.academia/" class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Junte-se a nós!</a>
              </S.ContainerInfo>
              <S.Grad></S.Grad>
              <BackgroundSlider
                  images={[image1, image2, image3, image4, image5]}
                  duration={10}
                  transition={2}
              />                            
        </S.Container>
        )
}

