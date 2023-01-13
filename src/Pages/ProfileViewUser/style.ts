import styled from "styled-components";

export const ContainerProfileUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.25rem;

  width: 100%;
  max-width: 100vw;
  background: linear-gradient(
    180deg,
    var(--brand1) 20.668rem,
    var(--grey8) 20.668rem
  );
  padding: 9.688rem 0px 4.688rem 0.75rem;

  .containerCardPerfilAdm {
    width: 90%;
    max-width: 77.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (width>768px) {
    padding: 9.688rem 0px 4.688rem 3.781rem;
    align-items: center;
    .containerCardPerfilAdm {
      padding-right: 60.496px;
      width: 77.5%;
      max-width: 77.5rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const ContainerProductPerfil = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2.5rem;

  width: 100%;
  max-width: 100vw;

  background-color: var(--grey8);

  .typeTittle {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.875rem;

    color: var(--grey0);
  }

  .product {
    margin-top: 1.438rem;
  }

  .auction {
    display: none;
  }

  @media (width>768px) {
    .auction {
      display: block;
    }
  }
`;
