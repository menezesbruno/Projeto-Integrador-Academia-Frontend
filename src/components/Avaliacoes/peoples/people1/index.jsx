import React from 'react'
import * as S from './style'
import woman from '../img/woman.png'

export default function index() {
  return (
    <S.Container>
        <S.InfoText>Excelente academia, professores atenciosos, equipamentos bons. Bom espaço, arejada. Super recomendada </S.InfoText>
        <S.InfoArea2>
            <img src={woman} alt='imagem1'/>
            <S.InfoName>
                <p style={{fontSize: '20px'}}>Jéssica</p>
                <p style={{opacity: '40%'}}>Aluna</p>
            </S.InfoName>
        </S.InfoArea2>
    </S.Container>
  )
}
