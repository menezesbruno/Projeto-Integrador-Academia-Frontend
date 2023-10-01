import React from 'react'
import * as S from './style'
import Woman from '../img/woman.png'

export default function index() {
  return (
    <S.Container>
        <S.InfoText>Preço acessível, espaço amplo com profissionais capacitados que dão todo suporte aos alunos!.</S.InfoText>
        <S.InfoArea2>
            <img src={Woman} alt='imagem5' />
            <S.InfoName>
                <p style={{fontSize: '20px'}}>Aline</p>
                <p style={{opacity: '40%'}}>Aluna</p>
            </S.InfoName>
        </S.InfoArea2>
    </S.Container>
  )
}
