import React from 'react'
import * as S from './style'
import Logo from '../../assets/pumpfit_logo.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import BG from '../../assets/bg_footer.png'
import './style.css'

export default function index() {
const link1 = 'https://www.instagram.com/pumpfit.academia/';
const link2 = 'https://www.facebook.com/academia.pumpfit/?locale=pt_BR';

  return ( 
    <S.Container style={{ backgroundImage: `url(${BG})`,backgroundSize: 'cover' }}>
            <S.ContainerAreaInfo>
                <S.LogoArea>
                    <S.LogoImage src={Logo} />
                    <S.SocialArea>
                        <a href={link1} target="_blank" rel="noopener noreferrer">
                            <S.SocialItem src={Instagram}/>
                        </a>
                        <a href={link2} target="_blank" rel="noopener noreferrer">
                            <S.SocialItem src={Facebook}/>
                        </a>
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
        <div class="container border-top border-dark pt-6 espaco">
            <div class="espacofont">
                <p class="m-0 text-center text-white">
                &copy; <b class="text-white font-weight-bold">Pump Fit</b>. Todos os direitos reservados.</p>
                <p class="m-0 text-center text-white"> Desenvolvido por <a class="text-white font-weight-bold" target="_blank" href="mailto:grupo4univesp@gmail.com"> Grupo 4</a>
                </p>
          </div>
        </div>            
    </S.Container>
  )
}
