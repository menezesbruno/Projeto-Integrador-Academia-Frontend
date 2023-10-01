import './style.css';
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Pagamentos from '../../components/Pagamentos'
import Beneficios from '../../components/Beneficios'
import Avaliacoes from '../../components/Avaliacoes'
import Banner from '../../components/Banner'
import Localizacao from '../../components/Localizacao'
import Footer from '../../components/Footer'
import ToTop from '../../components/ToTop'
import * as S from './style'

export default function Index() {
        document.title = 'Pump Fit'

    return (
            <>
            <ToTop />
            <Navbar />
            <Header/>
                <S.posicao1>
                    <Pagamentos/>
                </S.posicao1>
            <Beneficios/>
            <Banner />
            <Avaliacoes />
            <Localizacao />
            <Footer />
            </>
    );
}