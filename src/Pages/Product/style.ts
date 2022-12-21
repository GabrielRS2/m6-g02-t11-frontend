import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

width: 100%;
max-width: 100vw;
padding: 7.813rem 0.75rem 2.813rem 0.75rem;

background: linear-gradient(180deg, var(--brand1) 32.25rem, var(--grey8) 32.25rem);

  @media (width>768px) {
    background: linear-gradient(180deg, var(--brand1) 41rem, var(--grey8) 41rem);
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 46.938rem;
`;

export const ContainerProductImage = styled.div`

    width: 100%;
    max-width: 46.938rem;
    height: 22.188rem;


    background: var(--grey10);
    border-radius: 0.25rem;

  img {
    width: 100%;
    max-width: 46.938rem;
    height: 22.188rem;
  }
`;

export const ContainerSectionMobile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.25rem;

  width: 100%;

  .photos {
    width: 100%;
    height: 22.438rem;

    background-color: #000000;
  }

  @media (width>768px) {
    display: none;

    /* gap: 2.125rem;

    .photos {
      height: 23.563rem;
    } */
  }
`;
