import React from 'react'
import * as S from './style'
import man from '../img/man.png'

export default function index() {
  return (
    <S.Container>
        <S.InfoText>"Gosto muito da academia. O atendimento é excelente, e é um lugar onde me sinto realmente bem"</S.InfoText>
        <S.InfoArea2>
            <img src={man} alt='imagem3' />
            <S.InfoName>
                <p style={{fontSize: '20px'}}>Alexandre</p>
                <p style={{opacity: '40%'}}>Aluno</p>
            </S.InfoName>
        </S.InfoArea2>
    </S.Container>
  )
}
