import styled from "styled-components";
import ImgThankYou from "../assets/icon-thank-you.svg";

const ThanksStep = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;

  h2 {
    color: #151572;
  }

  p {
    color: gray;
    line-height: 22px;
  }
`;

export default function StepThanks() {
  return (
    <ThanksStep>
      <img src={ImgThankYou} alt="imgThanks" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@suportLorem.com
      </p>
    </ThanksStep>
  );
}
