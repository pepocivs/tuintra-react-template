import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const MainContainer = styled.div`
  display: ${({acceptedCookie}) => (acceptedCookie) ? 'none': 'grid'};
  width: 100%;
  grid-template-areas: "left content right";
  grid-template-columns: ${({theme}) => `${theme.spacings.layoutMargin} 1fr ${theme.spacings.layoutMargin}`};
  grid-gap: 10px;
  @media (max-width: ${({theme}) => theme.breakpoints.tabletLandscape}px) {
    grid-template-columns: ${({theme}) => `${theme.spacings.layoutSmallMargin} 1fr ${theme.spacings.layoutSmallMargin}`};
  }
  @media (min-width: ${({theme}) => theme.breakpoints.desktopLarge}px) {
    grid-template-columns: ${({theme}) => `1fr ${theme.breakpoints.desktop}px 1fr`};
  }
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: 0px 1fr 0px;
  }
  position: fixed;
  bottom: 30px;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const AcceptButton = styled.button`
  margin: auto;
  background: ${({theme}) => theme.clubOptions.principal_color_web};
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.75px;
  height: 32px;
  width: auto;
  padding: 2px 32px 0px 32px;
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
`;

const CookiesPolicyContainer = styled.div`
  grid-area: content;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.black};;
  border-radius: 10px;
  color: ${({theme}) => theme.colors.light};
  display: grid;
  grid-template-columns: 1fr 200px;
`;

export default function CookiesPolicy() {

  const acceptedCookie = getCookie('acceptedCookie');

  function acceptCookies() {
    setCookie('acceptedCookie', true);
    document.querySelector('#mainContainer').style.display = 'none';
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return false;
  }

  function setCookie(name, value) {
    const date = new Date();
    date.setTime(date.getTime() + (365*24*60*60*1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  return (
    <>
      <MainContainer acceptedCookie={acceptedCookie} id="mainContainer">
        <CookiesPolicyContainer>
          <div>
            <p>Esta página utiliza cookies propias y de terceros con el fin de mejorar nuestros servicios y realizar analisis de uso de la web.</p>
            <p>Si continúas navegando, consideramos que aceptas nuestra <Link to="/politica-de-cookies">Politica de cookies</Link>.</p>
          </div>
          <ButtonContainer>
            <AcceptButton type="button" onClick={acceptCookies}><span>Acepto</span></AcceptButton>
          </ButtonContainer>
        </CookiesPolicyContainer>
      </MainContainer>
    </>
  )
}
