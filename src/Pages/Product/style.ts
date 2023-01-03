import styled from "styled-components";
export const ContainerStyeld = styled.div`
  width: 100%;
  height: 3428px;
  min-height: 100vh;
  max-width: 1800px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  overflow: auto;

  background: linear-gradient(
    180deg,
    var(--brand1) 32.25rem,
    var(--grey8) 32.25rem
  );
  position: relative;

  .border {
    border: 5px solid black;
  }
  .figure {
    width: 93.6%;
    margin: 0 auto;
    margin-top: 7.8125rem;
    margin-bottom: 1.001rem;
    border-radius: 0.25rem;
    background: var(--grey10);
    .img {
      display: block;
      border-radius: 0.25rem;
      max-width: 100%;
      max-height: 355px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .container {
    background: var(--grey10);
    height: 20.4321365356rem;
    width: 93.6%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    margin: 0 auto;
    padding: 1.75rem;
  }
  .container2 {
    background: var(--grey10);
    height: 14.056875rem;
    width: 93.6%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    padding: 1rem 0;
  }
  .productModel {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);
  }
  .container--info {
    width: 84.04558405%;

    border-radius: 0.25rem;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .container--info-product {
    display: flex;

    gap: 0.75rem;
    span {
      color: var(--brand1);
      display: inline-block;
      height: 2rem;
      text-align: center;
      padding: 0.25rem 0.5rem;
      background: var(--brand4);

      //styleName: Text/body-2-500;
      font-family: Inter;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  @media (min-width: 850px) {
    height: 2500px;
    .figure,
    .container {
      width: 47%;
      margin-left: 11.3125%;
      margin-right: 41.6875%;
    }
    .container--flutuante {
      width: 27.5%;
      min-width: 351px;
      top: 6.8rem;
      left: 60%;
      position: absolute;
      @media (min-width: 1150px) {
        width: 27.5%;
        min-width: 351px;
        top: 6.8rem;
        right: 11.3125%;
        position: absolute;
      }
    }
  }
`;
export const ContainerDescription = styled.div`
  background: var(--grey10);

  width: 93.6%;

  text-align: justify;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  margin-top: 1.001rem;
  padding: 36px 28px;

  .description--tittle {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.51rem;

    color: var(--grey1);
  }
  .description--text {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75rem;

    color: var(--grey2);
  }

  .images {
    overflow: auto;
  }
  @media (min-width: 850px) {
    width: 47%;
    margin-left: 11.3125%;
    margin-right: 41.6875%;
  }
`;
export const ContainerImages = styled.div`
  background: var(--grey10);

  width: 93.6%;

  display: flex;
  flex-direction: column;

  gap: 2rem;
  margin: 0 auto;
  margin-top: 1.001rem;
  padding: 36px 28px;
  h2 {
    font-family: Lexend;
    color: var(--grey1);
    font-size: 20px;
    line-height: 25px;
    line-height: 100%;
  }
  .images {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    gap:0.3rem;

    width: 80%;

    min-width: 17.6rem;
    .images--title {
      margin-top: 2.25rem;
      margin-left: 2.75rem;
    }
    figure {
      width: 32%;
      min-width: 5.625rem;
      height: 4.8rem;
      
      &:hover {
        transition: 0.2s;
        border-bottom:0.2rem solid var(--brand2);
        cursor: pointer;
        
      }
      img {
        
        max-width: 100%;
      }
    }
  }
`;

export const Seller = styled.div`
  background: var(--grey10);

  width: 93.6%;

  display: flex;
  flex-direction: column;

  gap: 2rem;
  margin: 0 auto;
  margin-top: 1.001rem;
  padding: 40px 28px;

  align-items: center;
  .avatar {
    background: var(--brand2);
    height: 4.813rem;
    width: 4.813rem;
    font-size: 1.625rem;
    font-weight: 500;
    max-width: 100%;

    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: Inter;
    font-size: 27px;
    font-weight: 500;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
  }
  .figure {
    height: 4.813rem;
    width: 4.813rem;
    margin: 0 auto;
    border-radius: 100%;
    img {
      max-width: 100%;
      object-fit: contain;
      border-radius: 100%;
    }
  }
  button {
    max-width: 13.5rem;
  }
  .seller-name {
    //styleName: Heading/Heading-6-600;
    font-family: Lexend;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5625rem;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
  }
  .seller--description {
    //styleName: Text/body-1-400;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0em;
    text-align: center;
    color: var(--grey2);
    text-align: justify;
  }
  @media (min-width: 850px) {
  }
`;
export const ContainerComments = styled.div`
  background: var(--grey10);
  max-height: 52.8125rem;
  width: 93.6%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin: 0 auto;
  margin-top: 1.125rem;

  padding: 2.25rem 1.75rem;

  .carousel {
    overflow: hidden;
    h3 {
      //styleName: Heading/Heading-6-600;
      font-family: Lexend;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.5625;
      letter-spacing: 0em;
      text-align: left;
      color: var(--grey1);
      margin-bottom: 1.5rem;
    }
  }

  .inner-carousel {
    display: flex;
    max-height: 100%;
    flex-direction: column;

    overflow: auto;
    gap: 2.75rem;

    .coment--user {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 1rem;
      figure {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
      }
      img {
        height: 2rem;
        width: 2rem;
        border-radius: 100%;
        object-fit: contain;
      }
      .coment--user-name {
        //styleName: Text/body-2-500;
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--grey1);
      }
    }
    .coment--data {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--grey3);
    }
    .coment--coment {
      //styleName: Text/body-2-400;
      font-family: Inter;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5rem;
      letter-spacing: 0em;
      text-align: justify;
    }
    .avatar {
      background: var(--brand2);

      font-size: 0.875rem;
      font-weight: 500;
      width: 100%;
      height: 100%;

      border-radius: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      color: white;
      font-family: Inter;
    }
  }
  @media (min-width: 850px) {
    width: 47%;
    margin-left: 11.3125%;
    margin-right: 41.6875%;
  }
`;
export const ContainerPostComment = styled.form`
  padding: 36px 26px;
  background: var(--grey10);
  width: 93.6%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin: 0 auto;
  margin-top: 1.125rem;
  gap: 1.5rem;
  figure {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }
  img {
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    object-fit: contain;
  }
  .coment--user {
    display: flex;
    align-content: center;
    gap: 0.5rem;
    height: 2rem;
  }
  .avatar {
    background: var(--brand2);

    font-size: 0.875rem;
    font-weight: 500;
    width: 100%;
    height: 100%;

    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: Inter;
  }
  .coment--user-name {
    //styleName: Text/body-2-500;
    display: flex;
    align-items: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
  }
  textarea {
    border: 1.5px solid var(--grey7);
    height: 128px;
    width: 100%;
    padding: 13px 16px;

    border-radius: 4px;

    font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;
    letter-spacing: 0em;
    text-align: left;

    display: flex;
    flex-wrap: wrap;
    color: var(--grey3);
  }
  button {
    max-width: 5.75rem;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;
  }
  .comments--sugestion {
    display: flex;
    flex-wrap: wrap;

    gap: 8px;
    li {
      background: var(--grey7);
      color: var(--grey3);
      height: 1.5rem;

      border-radius: 24px;
      padding: 0px 12px 0px 12px;

      font-family: Inter;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0em;
      text-align: left;

      cursor: pointer;
    }
  }
  @media (min-width: 850px) {
    position: relative;
    width: 47%;
    margin-left: 11.3125%;
    margin-right: 41.6875%;

    button {
      position: absolute;
      bottom: 31.48788928%;
      right: 6.13%;
    }
  }
`;
