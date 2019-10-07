import React from "react";
import styled from "styled-components";

/** Custom components */
import Title from "components/UI/Title/Title";
import SvgIcon from "components/UI/SvgIcon/SvgIcon";

const ClubInfoRow = styled.p`
  display: flex;
  svg {
    width: 16px;
    margin-right: 10px;
  }
`;

export default function ContactContainer({clubInfo}) {
  if (!clubInfo.ready) return null;
  return (
    <>
    <Title shadow="con nosotros">Contacta</Title>
      <ClubInfoRow><SvgIcon name="email" />{clubInfo.data.clubInfo.contact.email}</ClubInfoRow>
      <ClubInfoRow><SvgIcon name="phone"/>{clubInfo.data.clubInfo.contact.phone}</ClubInfoRow>
      <ClubInfoRow><SvgIcon name="address" />{clubInfo.data.clubInfo.contact.address}</ClubInfoRow>
      <ClubInfoRow><SvgIcon name="city" />{clubInfo.data.clubInfo.contact.postalCode} - {clubInfo.data.clubInfo.contact.city}</ClubInfoRow>
      <ClubInfoRow><SvgIcon name="nif" />{clubInfo.data.clubInfo.contact.fiscalNumber}</ClubInfoRow>
    </>
  )
}
