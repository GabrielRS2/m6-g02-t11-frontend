import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  height: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: var(--grey0);
  color: var(--whiteFixed);
`;
export const ContainerTitle = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: var(--grey0);
  color: var(--whiteFixed);
`;

export const TitleText = styled.div`
  width: 50%;
  height: 1.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  h1 {
    color: red;
    font-size: 2rem;
  }
  h2 {
    padding-top: 0.5rem;
    color: blue;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const DivButton = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
