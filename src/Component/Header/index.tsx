import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TokenContext } from "../../Providers/Token";

import { HamburgerButton, HeaderContainer, PopupContainer } from "./style";
import { ThemeButton } from "../../Styles/ThemeButton";

import { nameToAcronym } from "./utils";

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar } from '@mui/material';
import { Modal, Menu, MenuItem } from '@mui/material';
import PopupState from "material-ui-popup-state";
import { bindMenu, bindTrigger } from "material-ui-popup-state/hooks";

export const Header = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { token, setToken } = useContext(TokenContext);
  const history = useHistory();

  useEffect(() => {
    setToken(localStorage.getItem("@localApp:token") || "");
    if (token !== "") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token, setToken]);

  function handleLogout() {
    setToken("");
    setIsLogged(false);
    localStorage.clear();
    history.push("/");
  }

  function handleClose() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{ zIndex: '0' }}
      >
        <div></div>
      </Modal>
      <HeaderContainer>
        <div>
          <img src="./Assets/logoColor.svg" alt="" />
        </div>
        <HamburgerButton 
        className="hamburgerButton" 
        onClick={() => {
          setIsOpen(!isOpen)
          }}>
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </HamburgerButton>
        <div className="infoContainer">
          <ul>
            <li><button onClick={() => setIsLogged(!isLogged)}>Carros</button></li>
            <li><button onClick={() => setIsLogged(!isLogged)}>Motos</button></li>
            <li><button onClick={() => setIsLogged(!isLogged)}>Leilão</button></li>
          </ul>
          {isLogged ? (
            <div className="infoLoginContainer">
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <button className="loginButton" {...bindTrigger(popupState)}>
                      <Avatar sx={{ 
                      bgcolor: "var(--brand2)", 
                      height: "2rem", 
                      width: "2rem", 
                      fontSize: "0.875rem", 
                      fontWeight: "700" }}
                      >
                      {nameToAcronym("Gabriel Ribeiro")}</Avatar>
                      <p>Gabriel Ribeiro</p>
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Editar Perfil</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Editar endereço</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Minhas Compras</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Sair</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          ) : (
            <div className="infoLogoutContainer">
              <button className="goLoginButton">Fazer login</button>
              <ThemeButton
                backGroundColor="var(--whiteFixed)"
                color="var(--grey0)"
                borderColor="var(--grey4)"
                size="medium"
                handleClick={() => console.log("GoRegister")}
              >Cadastrar</ThemeButton>
            </div>  
          )}
        </div>
      </HeaderContainer>
      <PopupContainer isOpen={isOpen}>
        <ul>
          <li onClick={() => {setIsLogged(!isLogged)}}>Carros</li>
          <li>Motos</li>
          <li>Leilão</li>
        </ul>
        {isLogged ? (
          <div className="infoLoginContainerMobile">
                   <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <button className="loginButton" {...bindTrigger(popupState)}>
                    <Avatar sx={{ 
                    bgcolor: "var(--brand2)", 
                    height: "2rem", 
                    width: "2rem", 
                    fontSize: "0.875rem", 
                    fontWeight: "700" }}
                    >
                    {nameToAcronym("Gabriel Ribeiro")}</Avatar>
                    <p>Gabriel Ribeiro</p>
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Editar Perfil</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Editar endereço</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Minhas Compras</MenuItem>
                      <MenuItem sx={{ fontWeight: '400', fontSize: "1rem", color: "var(--grey2)" }} onClick={popupState.close}>Sair</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
          </div>
        ) : (
          <div className="infoLogoutContainerMobile">
            <p>Fazer login</p>
            <ThemeButton
              backGroundColor="var(--whiteFixed)"
              color="var(--grey0)"
              borderColor="var(--grey4)"
              size="auto"
              handleClick={() => console.log("GoRegister")}
            >Cadastrar</ThemeButton>
          </div>  
        )}
      </PopupContainer>
    </>
  );
};
