import React from 'react'
import '../../flaticon/font/flaticon.css';
import Sobre from '../../assets/sobre.jpeg';
import * as S from './style'
import BG from '../../assets/bg_plan.png'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function index() {

    document.title = 'Pump Fit - Sobre nós'

  return (
    <S.All>
        <NavBar />
            <S.Header>
                <img src={BG} alt='background' />
                <S.HeaderInfo>
                    <h1>SOBRE NÓS</h1>
                    <p>PumpFit</p>
                </S.HeaderInfo>
            </S.Header>
            <S.Body>
                <S.InfoAdd>
                <div class="container py-5">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img src={Sobre} alt="Sobre" style={{width:'500px', height:'auto'}}></img>                            
                            </div>
                            <div class="col-lg-6">
                                <h2 class="display-4 text-white font-weight-bold mb-4">3 Anos de Excelência</h2>
                                <div class="row py-2">                          
                                    <div class="col-sm-6">
                                        <i class="flaticon-barbell display-2 text-primary"></i>
                                        <h4 class="font-weight-bold text-warning">Equipamentos</h4>  
                                        <p>Aqui você encontrará uma vasta gama de equipamentos novos e bem conservados, para todos os tipos de treinos. Venha desfrutar de um ambiente moderno e seguro para alcançar seus objetivos de forma eficaz!</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <i class="flaticon-medal display-2 text-primary"></i>
                                        <h4 class="font-weight-bold text-warning">Experiência</h4>
                                        <p>A Pump Fit é uma academia com 3 anos de experiência, oferecendo treinos de qualidade, equipamentos modernos e um ambiente acolhedor. Venha cuidar do seu corpo com a gente!</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>            
                </S.InfoAdd>
            </S.Body>   
        <Footer />
    </S.All>
  )
}
