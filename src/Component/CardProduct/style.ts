import styled, { css } from "styled-components";

interface IProps {
  is_active?: boolean;
}

export const ContainerCard = styled.div`
  width: 19.5rem;
  height: 21.875rem;
  padding: 0.063rem;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  :hover {
    .ContainerImage {
      border: 0.063rem #4529e6 solid;
    }
    .img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  gap: 1rem;
  .img {
    height: 90%;
    width: auto;
  }
`;

export const ContainerImage = styled.figure<IProps>`
  background-color: aliceblue;
  width: 19.5rem;
  height: 9.5rem;


  background-color: var(--grey8);

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  position: relative;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    gap: 0.625rem;

    position: absolute;
    max-width: 3.813rem;
    height: 1.5rem;
    left: 1rem;
    top: 0.688rem;

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--whiteFixed);
    ${(props) => {
      switch (props.is_active) {
        case true:
          return css`
            background-color: var(--brand1);
          `;
        case false:
          return css`
            background-color: var(--grey4);
          `;
        default:
          return css`
            background-color: transparent;
          `;
      }
    }}
  }
`;

export const TextTitle = styled.h4`
  width: 19.5rem;
  height: 1.375rem;

  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  color: var(--grey1);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TextInfo = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: var(--grey2);

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;

  width: 19.5rem;
  height: 3rem;
`;

export const ContainerOwner = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  padding: 0px;

  height: 2rem;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }

  span {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;

    height: 1.5rem;

    color: var(--grey2);

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 0.75rem;

  position: absolute;
  width: 7.063rem;
  height: 2rem;
  left: 0px;
  top: 0px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    gap: 0.625rem;

    width: 3.125rem;
    height: 2rem;


    background: var(--brand4);
    border-radius: 0.25rem;

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--brand1);
  }
`;

export const ContainerValor = styled.div`
  width: 19.313rem;
  height: 2rem;
  position: relative;

  span {
    position: absolute;
    width: 12.5rem;
    height: 1.25rem;
    left: 12.75rem;
    top: 0.25rem;

    font-family: "Lexend";
    font-style: normal;

    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;

    color: var(--grey1);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.125rem;

  width: 100%;
`;
