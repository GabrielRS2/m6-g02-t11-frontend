import styled from "styled-components";

export const ContainerProfileUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.25rem;

  width: 100%;
  max-width: 100vw;
  background: linear-gradient(180deg, var(--brand1) 20.668rem, var(--grey8) 20.668rem);;
  padding: 9.688rem 0px 4.688rem 3.781rem;

  .containerCardPerfilAdm {
    padding-right: 3.781rem;
  }

  @media(width>768px){
    align-items: center;
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

export const ContainerProducts = styled.div`
  display: flex;
  gap: 0.75rem;

  width: 100%;
  padding-bottom: .5rem;

  overflow: scroll;
  animation: productRender 1s;

  @media(width>768px){
    cursor: grab;
    overflow: auto;
  }

  @keyframes productRender {
    0% {
      padding-left: 100vw;
    }
    100% {
      padding-left: 0px;
    }
  }
`;