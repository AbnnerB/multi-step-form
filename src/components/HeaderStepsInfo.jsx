import styled from "styled-components";

const HeaderInfoSteps = styled.div`
  h2 {
    color: #0d0c53;
  }
  h4 {
    margin-top: 0.7rem;
    color: gray;
    font-weight: 400;
  }
`;

export default function HeaderStepsInfo({ title, subTitle }) {
  return (
    <HeaderInfoSteps>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
    </HeaderInfoSteps>
  );
}
