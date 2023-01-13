import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.25rem;

  width: 100%;
  max-width: 100vw;
  background: var(--grey8);
  padding: 2.375rem 0px 4.688rem 3.781rem;

  @media (width<390px) {
    padding: 2.375rem 0px 4.688rem 0.75rem;
  }
  @media (width>768px) {
    align-items: center;
  }
`;

export const ContainerHomeWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem;

  width: 100%;
  max-width: 100vw;
  padding: 10.469rem 0.75rem 8.75rem 0.75rem;

  background-color: var(--brand2);

  .containerTitler {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .containerTitler .title {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;

    color: var(--grey10);
  }

  .containerTitler .titleDesktop {
    display: none;
  }

  .subTitle {
    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75rem;
    text-align: center;

    color: var(--grey9);
  }
  .buttonsContainer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
  }

  @media (width>768px) {
    gap: 1.25rem;

    padding: 14.938rem 0.75rem 9.938rem 0.75rem;

    .containerTitler .title {
      display: flex;

      font-weight: 700;
      font-size: 2.75rem;
      line-height: 3.5rem;
    }

    .containerTitler .titleMobile {
      display: none;
    }

    .containerTitler .titleDesktop {
      display: flex;
    }

    .buttonsContainer {
      flex-direction: row;
      gap: 1.313rem;

      width: 100%;
      max-width: 23.813rem;
      margin-top: 1.625rem;

      a {
        width: 100%;
      }
    }
  }
`;

export const ContainerProductPerfil = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3.875rem;

  width: 100%;
  max-width: 100vw;

  background-color: var(--grey8);

  .typeTittle {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.875rem;

    color: var(--grey0);
  }
`;
