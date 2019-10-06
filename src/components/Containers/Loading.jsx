import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: calc(50% - ${({theme, height}) => height || theme.spacings.headerHeight});
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  max-width: 520px;
  text-align: center;
`;

const ClubLogo = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  margin: auto;
  margin-top: -80px;
  background-image: url(${({theme, shield}) => shield || theme.clubOptions.clubs_shield});
`;

const LoadingContainer = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${({theme, color}) => color || theme.clubOptions.principal_color_web};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function Loading({color, height, shield}) {
  return (
    <Container>
      <Content height={height}>
        <LoadingContainer color={color}/>
        <ClubLogo shield={shield} />
      </Content>
    </Container>
  )
}

export default Loading;
