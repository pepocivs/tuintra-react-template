import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

/** Custom components */
import Alert from "components/UI/Alert/Alert";

/** ACTIONS */
import actionsPeople from "../../../redux/people/actions";

/** SELECTORS */
import {
  getPeople,
  getPeopleLoading,
  getPeopleReady,
  getPeopleError,
  getPeopleHasError
} from "../../../redux/people/selectors";

const mapStateToProps = (state, props) => ({
  birthdays: {
    data: getPeople(state),
    loading: getPeopleLoading(state),
    ready: getPeopleReady(state),
    error: getPeopleError(state),
    hasError: getPeopleHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchPeople: (params) => dispatch(actionsPeople.fetchPeople(params)),
});

/** Styles */
const BirthdayBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 5px;
  background-color: ${({theme}) => theme.colors.light};
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
`;

const Picture = styled.img`
  width: 60px;
  padding: 5px;
`;

const BirthdayInfo = styled.div`
  text-align: center;
  justify-self: center;
  align-self: center;
`;

function Birthday({fetchPeople, birthdays, widgetInfo}) {
  useEffect(() => {
    fetchPeople('birthdays');
  }, [fetchPeople]);
  if (!birthdays.ready) return null;
  if(Object.keys(birthdays.data).length === 0) {
    return (
      <>
        <h2>{widgetInfo.title}</h2>
        <Alert icon="info" iconColor="#aec6cf" msg="No hay próximos cumpleaños" />
      </>
    );
  }
  const showAge = (widgetInfo.content === 'si');
  const formattedBirthdayData = formatBirthday(birthdays.data, showAge);
  return (
    <>
      <h2>{widgetInfo.title}</h2>
      {formattedBirthdayData.map(birthday => {
        return (
          <BirthdayBox key={birthday._id}>
            <Picture src={birthday.picture} />
            <BirthdayInfo>
              <span>{birthday.nextString}</span>
              <br />
              <span>{birthday.name.public} cumple {birthday.age} años!</span>
              <br />
              <span>¡¡¡FELICIDADES!!!</span>
            </BirthdayInfo>
          </BirthdayBox>
        )
      })}
    </>
  )
}

function formatBirthday(birthdayData, showAge) {
  const formattedData = birthdayData.map(data => {
    return {
      ...data,
      picture: (data.playerData) ? data.playerData.picture || '/assets/general/p_nofoto.png' : '/assets/general/p_nofoto.png',
      nextString: getNextString(data.birthDate),
      daysUntilNext: daysUntilNext(data.birthDate),
      age: showAge ? getAge(data.birthDate) : ''
    }
  });
  return formattedData
    .filter(data => data.isActive)
    .sort((a, b) => (a.daysUntilNext > b.daysUntilNext) 
      ? 1 
      : (a.daysUntilNext < b.daysUntilNext) 
        ? -1 
        : 0);
}

function daysUntilNext(birthday) {
  const dateNow = new Date().setHours(0, 0, 0, 0);
  let birthDayDate = new Date(birthday).setFullYear(new Date().getFullYear());
  birthDayDate = new Date(birthDayDate).setHours(0,0,0,0);
  return Math.floor((birthDayDate - dateNow) / 86400000);
}

function getNextString(birthday) {
  const daysLeft = daysUntilNext(birthday);
  return (daysLeft <= 0) ? 'Hoy' : (daysLeft === 1) ? 'Mañana' : `En ${daysLeft} días`;
}

function getAge(birthday) {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  return ((Math.abs(ageDate.getUTCFullYear() - 1970)) + 1);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Birthday);
