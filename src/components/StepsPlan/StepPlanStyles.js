import styled from "styled-components";

export const ContainerCards = styled.div`
  min-width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.button`
  background-color: transparent;
  padding: 1rem 2rem 1rem 0.5rem;
  border: 1px solid gray;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: calc(100% / 3 - 14px);

  &:focus,
  &:hover {
    border: 1px solid #6843ad;
  }

  .infoCard {
    text-align: left;
  }
`;

export const AltPlan = styled.div`
  min-width: 80%;
  margin-top: 1.5rem;
  background-color: #acace43b;
  padding: 1rem 0;
  border-radius: 8px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const ButtonAlternateType = styled.button`
  padding: 0.4rem 1.8rem;
  height: 30px;
  border-radius: 30px;
  background-color: #8282b9;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
  outline: none;

  div {
    width: 20px;
    height: 20px;
    background-color: white;
    color: white;
    border-radius: 50%;
  }
  .month {
    position: absolute;
    left: 5px;
    animation: moveMonth 1s;
  }
  @keyframes moveMonth {
    0% {
      left: 30px;
    }
    100% {
      left: 5px;
    }
  }

  .year {
    position: absolute;
    right: 5px;
    animation: moveYear 1s;
  }
  @keyframes moveYear {
    0% {
      right: 30px;
    }
    100% {
      right: 5px;
    }
  }
`;
