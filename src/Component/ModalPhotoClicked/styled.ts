import styled from "styled-components";

export const PhotoClickedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
  width: 90%;
  max-width: 30rem;
  background: var(--whiteFixed);
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p{
        font-weight: bolder;
    }
    >button {
      border: none;
      background: none;
      color: var(--gray4);
    }
  }
`;

export const CarImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;
