import React from 'react'
import * as S from './style'
import man from '../img/man.png'

export default function index() {
  return (
    <S.Container>
        <S.InfoText>A melhor academia do Wanel e região. Ótimo atendimento!!!</S.InfoText>
        <S.InfoArea2>
            <img src={man} alt='imagem4' />
            <S.InfoName>
                <p style={{fontSize: '20px'}}>Diogo</p>
                <p style={{opacity: '40%'}}>Aluno</p>
            </S.InfoName>
        </S.InfoArea2>
    </S.Container>
  )
}
