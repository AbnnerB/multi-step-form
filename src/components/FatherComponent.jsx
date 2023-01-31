import styled from "styled-components";

const FatherContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0 1rem 0;

  .topo h2 {
    color: #0d0c53;
  }
  .topo h4 {
    margin-top: 0.7rem;
    color: gray;
    font-weight: 400;
  }

  .content {
    margin-top: 2rem;
  }

  .barNavigation {
    display: flex;
    justify-content: space-between;
  }

  .barNavigation button:first-of-type {
    border: none;
    background-color: transparent;
    color: #a8a6a6;
    font-weight: bold;
  }

  .barNavigation button:last-of-type {
    background-color: #201f55;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 0.8rem 1rem;
  }
`;

export default function FatherComponent({ title, subTitle, children }) {
  return (
    <FatherContainer>
      <div>
        <div className="topo">
          <h2>{title}</h2>
          <h4>{subTitle}</h4>
        </div>
        <div className="content">{children}</div>
      </div>

      <div className="barNavigation">
        <button>Go Back</button>
        <button>Next Step</button>
      </div>
    </FatherContainer>
  );
}
