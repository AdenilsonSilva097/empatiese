import styled from "styled-components";

import { windowWidth } from "../../styles/global";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  position: absolute;
  padding-top: 15px;
  padding-bottom: 15px;

  > :first-child {
    padding-bottom: 15px;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  padding-right: 20px;
  

  > * {
    flex-grow: 1;
    flex-basis: 1;
  }

  @media (max-width: ${windowWidth.mobile.large}) {
    width: 100%;
    align-items: flex-start;
    flex-direction: column;

    > * {
      width: 100% !important;
    }
  }

`;

export {
  Container, Form, FormFields
};
