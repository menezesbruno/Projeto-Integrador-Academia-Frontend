import React from 'react'
import * as S from './style'
import Logo from '../../assets/pumpfit_logo.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'

export default function index() {
  return (
    <S.Container>
        <S.ContainerAreaInfo>
            <S.LogoArea>
                <S.LogoImage src={Logo} />
                <S.SocialArea>
                    <S.SocialItem src={Instagram}/>
                    <S.SocialItem src={Facebook}/>
                </S.SocialArea>
            </S.LogoArea>
            <S.Uls>
                <S.Contato>
                    <h4>CONTATO</h4>
                    <S.ContatoItem>apumpfit@gmail.com</S.ContatoItem>
                    <S.ContatoItem>Av. Paulo Emanuel de Almeida, 791</S.ContatoItem>
                    <S.ContatoItem>Primeiro Andar</S.ContatoItem>
                    <S.ContatoItem>Sorocaba - SP</S.ContatoItem>
                    <S.ContatoItem>(15)99764-9016</S.ContatoItem>
                </S.Contato>
                <S.Horario>
                    <h4>FUNCIONAMENTO</h4>
                    <S.HorarioInfo>
                        <S.HorariosItemDia>
                            <S.HorariosItem>Seg - Sex</S.HorariosItem>
                            <S.HorariosItem>Sáb</S.HorariosItem>
                        </S.HorariosItemDia>
                        <S.HorariosItemHora>
                            <S.HorariosItem>06h - 22h</S.HorariosItem>
                            <S.HorariosItem>08h - 12h</S.HorariosItem>
                        </S.HorariosItemHora> 
                    </S.HorarioInfo>
                </S.Horario>
            </S.Uls>
        </S.ContainerAreaInfo>
    </S.Container>
  )
}
