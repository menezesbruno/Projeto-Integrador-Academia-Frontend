import React, { useState, useEffect } from 'react'
import * as S from './style'
import JSONResult from './modalidades.json'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ToTop from '../../components/ToTop'
import BG from '../../assets/bg_modalidades.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/main.css'


export default function Index() {

    const [result, setResult] = useState([])

    useEffect(()=>{
        setResult(JSONResult)
    },[])

    document.title = 'Pump Fit - Modalidades'
  return (
    <S.All>
        <NavBar />
        <ToTop />
        <S.HeaderArea>
            <h1 class="font-pj-h1">Atividades disponíveis na Academia</h1>
            <img src={BG} alt='background'/>
        </S.HeaderArea>
        <S.Container>
            {result.map((item, key)=>(
                <S.Item key={key}>
                    <img src={item.icon_img} alt='modalidades'/>
                    <S.ItemNome>{item.nome}</S.ItemNome>
                    <S.ItemDesc>{item.desc}</S.ItemDesc>
                </S.Item>
            ))}
        </S.Container>
        <Footer />
    </S.All>
  )
}
