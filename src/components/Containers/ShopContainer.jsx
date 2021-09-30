import React, { useEffect } from "react";
import styled from "styled-components";

/** Custom components */
import Loading from "components/Containers/Loading";
import Alert from "components/UI/Alert/Alert";
import Title from "components/UI/Title/Title";
import Card from "components/UI/Card/Card";

/** Styles */
const OrderForm = styled.iframe`
  width: 100%
  height: 100%;
  min-height: 100vh;
  border: 0px;
`;

const ShopCatalogContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  column-gap: 30px;
  margin-bottom: 30px;
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  column-gap: 45px;
`;

const LinkContent = styled.div`
  width: 128px;
`;

const FileName = styled.p`
  text-align: center;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 20px;
  justify-content: space-evenly;
`;

function ShopContainer({fetchShop, shop = []}) {
  useEffect(() => {
    fetchShop();
  }, [fetchShop]);
  if (!shop.ready) return <Loading />;
  if (shop.data.length === 0) return <><Title shadow="Tienda">Tienda</Title><Alert icon="info" iconColor="#aec6cf" msg="No se han encontrado productos en la tienda" /></>
  return (
    shop.data.map((shopData, index) => (
      <div key={index}>
        <Title shadow="Tienda Online">{shopData.name}</Title>
        <ShopCatalogContainer>
          <ItemsContainer>
            {
              shopData.items.map((item) => (
                <Card
                  key={item._id}
                  bgImage={item.image || '/assets/general/shop_nofoto.jpg'}
                  title={item.name}
                  subtitle={item.price}
                  outerText={item.description}
                  bgPosition="top"
                  width="250px"
                  height="333px">
                </Card>
              ))
            }
          </ItemsContainer>
          <OrderForm src={`https://docs.google.com/forms/d/e/${shopData.form}/viewform?embedded=true`}>Cargando…</OrderForm>
        </ShopCatalogContainer>
        <LinkContainer>
          {
            shopData.files.map((file) => (
              <LinkContent>
                <a href={file.link} target="_blank"><img src={`/assets/extensions/${file.extension}.png`} alt={`File extension ${file.extension}`} /></a>
                <FileName>{file.fileName}</FileName>
              </LinkContent>
            ))
          }
        </LinkContainer>
      </div>
    ))
  );
}

export default ShopContainer;