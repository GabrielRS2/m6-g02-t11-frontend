import styled from "styled-components";

export const ContainerCarrousel = styled.div`
  width: 100%;
  display: flex;

  .item {
    margin-left: 0.75rem;
  }
  .item:last-child {
    margin-right: 0;
  }
  .inner-carousel {
    display: flex;
  }
  .carousel {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  @media (min-width: 680px) {
    .item {
      margin: 0 1.75rem;
    }
  }
`;
