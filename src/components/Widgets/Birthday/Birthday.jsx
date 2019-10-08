import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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
import theme from "theme";


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
  background-color: ${({theme}) => theme.colors.grey};
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

function Birthday({fetchPeople, birthdays, content}) {
  useEffect(() => {
    fetchPeople('birthdays');
  }, [fetchPeople]);
  if (!birthdays.ready) return null;
  const showAge = (content === 'si');
  return (
    <>
      {birthdays.data.map(birthday => {
        return (
          <BirthdayBox key={birthday._id}>
            <Picture src={(birthday.playerData) ? birthday.playerData.picture || '/assets/general/p_nofoto.png' : '/assets/general/p_nofoto.png' } />
            <BirthdayInfo>
              <span>{getNextString(birthday.birthDate)}</span>
              <br />
              <span>{birthday.name.public} cumple {showAge ? getAge(birthday.birthDate) : ''} años!</span>
              <br />
              <span>¡¡¡FELICIDADES!!!</span>
            </BirthdayInfo>
          </BirthdayBox>
        )
      })}
    </>
  )
}

function daysUntilNext(birthday){
  const dateNow = new Date().setHours(0, 0, 0, 0);
  let birthDayDate = new Date(birthday).setFullYear(new Date().getFullYear());
  birthDayDate = new Date(birthDayDate).setHours(0,0,0,0);
  return (birthDayDate - dateNow) / 86400000;
}

function getNextString(birthday) {
  const daysLeft = daysUntilNext(birthday);
  return (daysLeft === 0) ? 'Hoy' : (daysLeft === 1) ? 'Mañana' : `En ${daysLeft} días`;
}

function getAge(birthday) {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  const addition = (daysUntilNext(birthday) === 0) ? 0 : 1;
  return ((Math.abs(ageDate.getUTCFullYear() - 1970)) + addition);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Birthday);
