import styled from "styled-components";

export const ContainerAllServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerService = styled.button`
  background-color: transparent;
  border: 1px solid #b0aaff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  cursor: auto;
  padding: 1rem;

  .serviceCheckAndInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .serviceCheckAndInfo div {
    text-align: left;
  }
  .serviceCheckAndInfo div h3 {
    color: #09085a;
  }
  .serviceCheckAndInfo div p {
    margin-top: 0.2rem;
    color: gray;
  }
  span {
    color: #9691e2;
    font-weight: bold;
  }
  input {
    cursor: pointer;
  }
`;
