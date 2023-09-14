import './App.css';
import Home from './pages/Home'
import SendMail from './pages/SendMail'
import NotFound from './pages/Error'
import Espaco from './pages/Espaco'
import Sobre from './pages/Sobre'
import Modalidades from './pages/Modalidades'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Login from './pages/Login'
//<Route path='/entrar' element={<Login />}/> 

function App() {        

    return (
        <BrowserRouter>
            <Routes>               
                <Route path='/' element={<Home />} />
                <Route path='/Contato' element={<SendMail />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/Espaco' element={<Espaco />}/>
                <Route path='/Modalidades' element={<Modalidades />}/>
                <Route path='/Sobre' element={<Sobre />}/>
            </Routes>
        </BrowserRouter>     
    );
}

export default App;
