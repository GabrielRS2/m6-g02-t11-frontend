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
  @media (width>768px) {
    height: 23.563rem;
    width: 100%;
    max-width: 27.5rem;
  }
`;
export const ContainerImages = styled.div`
  width: 100%;
  max-width: 17.563rem;
  height: 14.375rem;
  display: flex;
  flex-wrap: wrap;

  gap: 5.5px;
  align-content: space-between;

  border-radius: 0px;

  figure {
    width: 100%;
    max-width: 5.625rem;
    background: var(--grey7);

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (width>768px) {
    max-width: 27.5rem;
    min-width: 14rem;
    height: 23.563rem;
    border-radius: 0px;

    figure {
      max-width: 6.75rem;

      display: flex;
      background: var(--grey7);
    }
  }
`;
