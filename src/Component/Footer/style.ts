import styled, { css } from "styled-components";
interface IProps {
  absolute?: boolean;
}
export const ContainerFooter = styled.div<IProps>`
  width: 100%;
  height: 19.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--grey0);
  color: var(--whiteFixed);

  bottom: 0;

  ${({ absolute }) => {
    return css`
      position: absolute;
      bottom: 0;
    `;
  }}

  @media (width>700px) {
    flex-direction: row;
    height: 10rem;
    padding: 0px 3.75rem;
  }
`;
export const ContainerTitle = styled.div`
  height: 33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--grey0);
  color: var(--whiteFixed);
`;

export const TitleText = styled.div`
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
  height: 33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  p {
    font-family: "Times New Roman", Times, serif;
    font-weight: lighter;
    color: var(--grey7);
  }
`;

export const DivButton = styled.div`
  height: 33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
