import React from 'react'
import * as S from './style'

export default function index() {
  return (
    <S.Container>
<div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-4 p-0">
          <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: '300px' }}>
            <i className="flaticon-treadmill display-2 text-primary mr-3"></i>
            <div className="">  
              <h2 className="display-6 text-white mb-3">Musculação</h2>
              <p>
                A progressão muscular é a chave para o desenvolvimento e fortalecimento contínuo dos músculos, através do aumento progressivo da carga ou intensidade do treinamento.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="d-flex align-items-center bg-primary text-white px-5" style={{ minHeight: '300px' }}>
            <i className="flaticon-weightlifting display-2 text-secondary mr-3"></i>
            <div className="">
              <h2 className="display-6 text-white mb-3">Nutrição adequada</h2>
              <p>
                A alimentação adequada desempenha um papel crucial na promoção do crescimento muscular, fornecendo os nutrientes necessários para a síntese proteica, recuperação muscular e energia para os treinos.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: '300px' }}>
            <i className="flaticon-training display-2 text-primary mr-3"></i>
            <div className="">
              <h2 className="display-6 text-white mb-3">Progressão</h2>
              <p>
                A combinação de treinamento adequado, alimentação balanceada e descanso apropriado são fundamentais para alcançar um crescimento muscular eficaz e sustentável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </S.Container>
  )
};
