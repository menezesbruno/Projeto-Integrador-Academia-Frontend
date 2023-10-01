import React from 'react'
import * as S from './style'
import IMG from '../../assets/pumpfit_logo.png'
import { Link } from 'react-router-dom'

export default function index() {
    document.title = '!! Suas informações foram enviadas com Sucesso !!'
  return (
    <S.Container>
        <img src={IMG} alt='enviado' />
        <h1 class='text-white'> !! Suas informações foram enviadas com sucesso, em breve retornamos o contato !!</h1>
        <hr></hr>
        <button><Link to='/'>Ir para o início</Link></button>
    </S.Container>
  )
}
