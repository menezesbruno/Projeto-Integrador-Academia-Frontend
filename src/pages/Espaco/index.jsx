import './style.css';
import React from 'react'
import * as S from './style'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ToTop from '../../components/ToTop'
import ImageSlide from '../../components/ImageSlide'

export default function Index() {

  document.title = 'Pump Fit - Espaço'

  return(
    <S.All>
        <NavBar />
        <ToTop />
        <ImageSlide />
        <Footer />
    </S.All>
  )
}
