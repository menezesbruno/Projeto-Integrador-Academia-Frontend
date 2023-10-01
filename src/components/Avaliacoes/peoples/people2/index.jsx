import React from 'react'
import * as S from './style'
import woman from '../img/woman.png'

export default function index() {
  return (
    <S.Container>
        <S.InfoText>Estou amando a experiência. Atendimento espetacular (recepção e acompanhamento) dos treinos.</S.InfoText>
        <S.InfoArea2>
            <img src={woman} alt='imagem2' />
            <S.InfoName>
                <p style={{fontSize: '20px'}}>Rebeca</p>
                <p style={{opacity: '40%'}}>Aluna</p>
            </S.InfoName>
        </S.InfoArea2>
    </S.Container>
  )
}
