import styled, { css } from "styled-components";

interface IProps {
  is_active?: boolean;
}

export const ContainerCard = styled.div`
  width: 312px;
  height: 350px;
  padding: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const ContainerImage = styled.figure<IProps>`
  background-color: aliceblue;
  width: 312px;
  height: 152px;

  background-color: var(--grey7);

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
    padding: 0px 8px;
    gap: 10px;

    position: absolute;
    max-width: 61px;
    height: 24px;
    left: 16px;
    top: 11px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

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

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const TextTitle = styled.h4`
  width: 312px;
  height: 22px;

  font-family: "Lexend";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
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

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  width: 312px;
  height: 48px;
`;

export const ContainerOwner = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: 0px;

  height: 32px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    height: 24px;

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
  gap: 12px;

  position: absolute;
  width: 113px;
  height: 32px;
  left: 0px;
  top: 0px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;

    width: 50px;
    height: 32px;

    background: var(--brand4);
    border-radius: 4px;

    flex: none;
    order: 0;
    flex-grow: 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: var(--brand1);
  }
`;

export const ContainerValor = styled.div`
  width: 309px;
  height: 32px;
  position: relative;

  span {
    position: absolute;
    width: 200px;
    height: 20px;
    left: 204px;
    top: 4px;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: var(--grey1);
  }
`;
