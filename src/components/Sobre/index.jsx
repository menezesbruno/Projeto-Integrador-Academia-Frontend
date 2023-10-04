import React from 'react'
import '../../flaticon/font/flaticon.css';
import Sobre from '../../assets/sobre.jpeg';
import * as S from './style'

export default function index() {

    document.title = 'Pump Fit - Sobre nós'

  return (
    <S.All>
            <S.Body>
                <S.InfoAdd>
                <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <img className="img-fluid" src={Sobre} alt="Sobre" style={{width:'500px', height:'auto'}}></img>                            
                            </div>
                            <div className="col-lg-6">
                                <h2 className="display-4 text-white font-weight-bold mb-4 text-center">3 Anos de Excelência</h2>
                                <div className="row py-0">                          
                                    <div className="col-sm-6 mb-4">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="flaticon-barbell display-2 text-primary mr-4"></i>
                                        </div>
                                        <h4 className="font-weight-bold text-warning text-center">Equipamentos</h4>  
                                        <p className="text-justify">Aqui você encontrará uma vasta gama de equipamentos novos e bem conservados, para todos os tipos de treinos. Venha desfrutar de um ambiente moderno e seguro para alcançar seus objetivos de forma eficaz!</p>
                                    </div>
                                    <div className="col-sm-6 mb-4">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="flaticon-medal display-2 text-primary mr-4"></i>
                                        </div>
                                        <h4 className="font-weight-bold text-warning text-center">Experiência</h4>
                                        <p className="text-justify">A Pump Fit é uma academia com 3 anos de experiência, oferecendo treinos de qualidade, equipamentos modernos e um ambiente acolhedor. Venha cuidar do seu corpo com a gente!</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>            
                </S.InfoAdd>
            </S.Body>   
    </S.All>
  )
}
