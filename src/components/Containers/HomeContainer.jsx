import React from "react";
import styled from "styled-components";

/** Custom components */
import Loading from "components/Containers/Loading";
import GetWidget from "components/Widgets/GetWidget";
import News from "components/Widgets/News/News";

const HomeGridContainer = styled.div`
  margin: 550px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  min-height: calc(100vh - ${({theme}) => theme.spacings.headerHeight});
  grid-template-areas:
    "medio-izquierda medio-centro medio-derecha"
    "destacado destacado destacado"
    "pie-izquierda pie-centro pie-derecha";
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-areas:
    "medio-izquierda"
    "medio-centro"
    "medio-derecha"
    "destacado"
    "pie-izquierda"
    "pie-centro"
    "pie-derecha";
    grid-template-columns: 1fr;
    margin: 50px auto;
    padding-top: 0px;
  }

`;

const WidgetMI = styled.div`
  grid-area: medio-izquierda;
`;
const WidgetMC = styled.div`
  grid-area: medio-centro;
`;
const WidgetMD = styled.div`
  grid-area: medio-derecha;
`;
const WidgetD = styled.div`
  grid-area: destacado;
`;
const WidgetPI = styled.div`
  grid-area: pie-izquierda;
`;
const WidgetPC = styled.div`
  grid-area: pie-centro;
`;
const WidgetPD = styled.div`
  grid-area: pie-derecha;
`;

function HomeContainer({clubInfo}) {
  if (!clubInfo.ready) return <Loading />;
  const widgets = clubInfo.data.widgets;
  return (
    <>
      <News></News>
      <HomeGridContainer>
        <WidgetMI><GetWidget widget={widgets.find(widget => widget.position === 'medio-izquierda')} /></WidgetMI>
        <WidgetMC><GetWidget widget={widgets.find(widget => widget.position === 'medio-centro')} /></WidgetMC>
        <WidgetMD><GetWidget widget={widgets.find(widget => widget.position === 'medio-derecha')} /></WidgetMD>
        <WidgetD><GetWidget widget={widgets.find(widget => widget.position === 'destacado')} /></WidgetD>
        <WidgetPI><GetWidget widget={widgets.find(widget => widget.position === 'pie-izquierda')} /></WidgetPI>
        <WidgetPC><GetWidget widget={widgets.find(widget => widget.position === 'pie-centro')} /></WidgetPC>
        <WidgetPD><GetWidget widget={widgets.find(widget => widget.position === 'pie-derecha')} /></WidgetPD>
      </HomeGridContainer>
    </>
  )
}

export default HomeContainer;