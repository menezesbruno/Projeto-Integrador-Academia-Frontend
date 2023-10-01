import React, { useState } from 'react';
import * as S from './style';
import logoText from '../../assets/logoText.png';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';

export default function Index() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <S.Nav>
      <S.BackNav onClick={handleOpenMenu} show={openMenu}></S.BackNav>
      <Link to="/">
        <S.NavImg src={logoText} alt="logo" />
      </Link>
      <S.NavItems showMenu={openMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Espaco">Espaço</Link>
        </li>
        <li>
          <Link to="/Modalidades">Modalidades</Link>
        </li>
        <li>
          <Link to="/Sobre">Sobre Nós</Link>
        </li>
        {/* <li><Link to="/registrar">Registrar</Link></li>  */}
        {/* LINK EXTERNO PARA O SITE EM C# */}
        <li>
          <a href="https://pi-academia.azurewebsites.net/Identity/Account/Register">
            Registrar
          </a>
        </li>
        {/* <li>
          <Link to="/entrar">Login</Link>
        </li> */}
        {/* LINK EXTERNO PARA O SITE EM C# */}
        <li>
          <a href="https://pi-academia.azurewebsites.net/Identity/Account/Login">
            Login
          </a>
        </li>
        <S.NavButton2>
          <Link to="/Contato">Contate-nos!</Link>
        </S.NavButton2>
      </S.NavItems>
      <S.NavButton>
        <Link to="/Contato">Contate-nos!</Link>
      </S.NavButton>
      <S.HamburgerArea onClick={handleOpenMenu}>
        <Hamburger color="#ff0022" toggled={openMenu} toggle={setOpenMenu} />
      </S.HamburgerArea>
    </S.Nav>
  );
}
