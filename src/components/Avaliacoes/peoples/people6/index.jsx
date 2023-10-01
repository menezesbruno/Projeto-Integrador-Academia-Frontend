import React from 'react'
import * as S from './style'
import Man from '../img/man.png'

export default function index() {
  return (
    <S.Container>
        <S.InfoText>Preços acessíveis, instrutores prestativos e uma ampla variedade de equipamentos. Recomendo!.</S.InfoText>
        <S.InfoArea2>
            <img src={Man} alt='imagem6' />
            <S.InfoName>
                <p style={{fontSize: '20px'}}>Felipe</p>
                <p style={{opacity: '40%'}}>Aluno</p>
            </S.InfoName>
        </S.InfoArea2>
    </S.Container>
  )
}
