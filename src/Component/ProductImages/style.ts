import styled from "styled-components";

export const ContainerPhotos = styled.div`
  height: 22.438rem;
  width: auto;

  border-radius: 0.25rem;
  padding: 2.75rem 2.25rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: var(--grey10);

  h6 {
    font-size:1.25rem;
    font-weight: 600;
    line-height: 1.51rem;
    text-align: left;
  }
  /* @media (min-width: 355px) {
    width: 100%;
    max-width: 27.5rem;
  } */
`;
export const ContainerImages = styled.div`
  width: 100%;
  max-width: 17.563rem,;
  height: 14.375rem;
  display: flex;
  flex-wrap: wrap;

  gap: 5.5px;
  align-content: space-between;

  border-radius: 0px;

  figure {
    width: 100%;
    max-width: 6.25rem;
    max-height: 11.25rem;
    display: flex;
    background: var(--grey7);

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 350px) {
    width: 300px;
    height: 248px;
    border-radius: 0px;

    figure {
      height: 95px;
      width: 95px;

      display: flex;
      background: var(--grey7);

      img {
        max-width: 100%;
      }
    }
  }
  @media (min-width: 365px) {
    width: 320px;
    height: 248px;
    border-radius: 0px;

    figure {
      height: 100px;
      width: 100px;

      display: flex;
      background: var(--grey7);

      img {
        max-width: 100%;
      }
    }
  }
  @media (min-width: 380px) {
    width: 330px;
    height: 248px;
    border-radius: 0px;

    figure {
      height: 105px;
      width: 105px;

      display: flex;
      background: var(--grey7);

      img {
        max-width: 100%;
      }
    }
  }

  @media (min-width: 400px) {
    height: 248px;
    width: 352px;
    border-radius: 0px;
    gap: 14px;

    figure {
      height: 108px;
      width: 108px;

      display: flex;
      background: var(--grey7);

      img {
        max-width: 100%;
      }
    }
  }
`;
