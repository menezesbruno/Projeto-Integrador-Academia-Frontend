import React from 'react'
import * as S from './style'
import NavBar from '../../components/Navbar'
import Sobre from '../../components/Sobre'
import Footer from '../../components/Footer'
import ToTop from '../../components/ToTop'
import BG from '../../assets/bg_sobre.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css'

export default function Index() {

    document.title = 'Pump Fit - Modalidades'
  return (
    <S.All>
        <NavBar />
        <S.HeaderArea>
            <h1 class="font-pj-h1">Sobre Nós</h1>
            <img src={BG} alt='background'/>
        </S.HeaderArea>        
        <Sobre/>
        <ToTop />
        <S.Container>
        </S.Container>
        <Footer />
    </S.All>
  )
}
