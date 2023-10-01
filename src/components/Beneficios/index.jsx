import React from 'react'
import * as S from './style'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css'
import imagem1 from '../../assets/feature-1.jpg'
import imagem2 from '../../assets/feature-2.jpg'
import imagem3 from '../../assets/feature-3.jpg'
import imagem4 from '../../assets/feature-4.jpg'

export default function index() {
  return (
    <S.Container>
    <div class="container feature pt-5">
            <div class="d-flex flex-column text-center mb-5">
                <h4 class="text-primary font-weight-bold">Por que fazer academia?</h4>
                <h4 class="display-4 text-white font-weight-bold">Benefícios em fazer exercícios</h4>
            </div>
            <div class="row">
                <div class="col-md-6 mb-5">
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <img class="img-fluid mb-3 mb-sm-0" src={imagem1} alt="image1"/>
                            <i class="flaticon-barbell"></i>
                        </div>
                        <div class="col-sm-7">
                            <h4 class="font-weight-bold text-warning">Saúde</h4>
                            <p>Exercícios regulares melhoram saúde cardiovascular, força muscular, controle de peso, reduzem estresse e ansiedade, promovendo bem-estar emocional e equilíbrio geral.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-5">
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <img class="img-fluid mb-3 mb-sm-0" src={imagem2} alt="image2"/>
                            <i class="flaticon-training"></i>
                        </div>
                        <div class="col-sm-7">
                            <h4 class="font-weight-bold text-warning">Durma melhor</h4>
                            <p>Noites de sono revigorantes, energia, alívio das dores, saúde ideal e qualidade de vida. Nós sabemos como ajudar.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-5">
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <img class="img-fluid mb-3 mb-sm-0" src={imagem3} alt="image3"/>
                            <i class="flaticon-trends"></i>
                        </div>
                        <div class="col-sm-7">
                            <h4 class="font-weight-bold text-warning">Físico definido</h4>
                            <p>Tenha músculos definidos, elogios dos amigos e um visual incrível neste verão! Nós temos a estratégia perfeita para ajudá-lo a alcançar seus objetivos de forma eficaz.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-5">
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <img class="img-fluid mb-3 mb-sm-0" src={imagem4} alt="image4"/>
                            <i class="flaticon-support"></i>
                        </div>
                        <div class="col-sm-7">
                            <h4 class="font-weight-bold text-warning">Evite doenças</h4>
                            <p>Academia previne doenças como doenças cardíacas, diabetes, obesidade e osteoporose, com saúde cardiovascular, controle de peso e fortalecimento muscular.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </S.Container>
        )
}
