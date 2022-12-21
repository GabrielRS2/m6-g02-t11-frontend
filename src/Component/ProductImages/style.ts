import styled from "styled-components";

export const ContainerPhotos = styled.div`
  box-sizing: border-box;
  min-height: 359px;
  min-width: 351px;
  max-height: 377px;
  max-width: 440px;

  border-radius: 4px;
  padding: 36px 44px 36px 44px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  h6 {
    font-family: Lexend;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
  @media (min-width: 355px) {
    width: 100%;
    max-width: 440px;
  }
`;
export const ContainerImages = styled.div`
  width: 281px;
  height: 230px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  align-content: space-between;

  border-radius: 0px;

  figure {
    width: 90px;
    height: 90px;
    display: flex;
    background: var(--grey7);

    img {
      max-width: 100%;
    }
  }

  @media (min-width: 350px) {
    width: 290px;
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
    width: 300px;
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
    width: 320px;
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
