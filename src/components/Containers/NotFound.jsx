import React from 'react'
import styled from "styled-components";

function NotFound({ title, subtitle }) {
  const Container = styled.div`
    position: relative;
    height: 100vh;
    background-color: #fafbfd;
  `;
  const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    max-width: 520px;
    width: 100%;
    text-align: center;
  `;
  const CloudContainer = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
    z-index: -1;

    div {
      width: 100%;
      background: #fff;
      border-radius: 90px;
      height: 125px;
    }

    div:nth-child(1) {
      -webkit-box-shadow: 5px 5px 0px 0px #f3f3f3;
              box-shadow: 5px 5px 0px 0px #f3f3f3;
    }

    div:nth-child(2) {
      -webkit-transform: scale(1.3);
          -ms-transform: scale(1.3);
              transform: scale(1.3);
      -webkit-box-shadow: 5px 5px 0px 0px #f3f3f3;
              box-shadow: 5px 5px 0px 0px #f3f3f3;
      position: relative;
      z-index: 10;
    }

    div:nth-child(3) {
      -webkit-box-shadow: 5px 5px 0px 0px #f3f3f3;
              box-shadow: 5px 5px 0px 0px #f3f3f3;
      position: relative;
      z-index: 90;
    }
  `;

  const Title = styled.h1`
    font-family: 'Gayathri', sans-serif;
    font-size: 86px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 8px;
    color: #151515;
  `;

  const SubTitle = styled.h2`
    font-family: 'Gayathri', sans-serif;
    font-size: 26px;
    margin: 0;
    font-weight: 700;
    color: #151515;
  `;
  return (
    <Container>
      <Content>
        <CloudContainer>
          <div></div>
          <div></div>
          <div></div>
        </CloudContainer>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </Container>
  )
}

export default NotFound;