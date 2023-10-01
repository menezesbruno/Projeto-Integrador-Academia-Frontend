import * as S from './style'
import './style.css'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Email from '../../components/Email'


export default function index() {
    document.title = 'Pump Fit - Entre em Contato'
  return (
    <S.All>
        <NavBar />
        <S.mcenter>
            <Email />
        </S.mcenter>
        <Footer />
    </S.All>
  )
}
