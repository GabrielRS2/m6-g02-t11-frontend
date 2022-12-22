import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  
  padding: 2.75rem 1.75rem 1.75rem 1.75rem;
  width: 100%;
  max-width: 46.938rem;
  border-radius: 0.25rem;

  background-color: var(--grey10);

  .productModel {
    font-family: 'Lexend';
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);
  }

  .containerInfo {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }

  .containerInfo .containerInfoProduct {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .containerInfo .containerInfoProduct p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    
    background: var(--brand4);
    color: var(--brand1);
    border-radius: 4px;

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  .containerInfo .price {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: var(--grey1);
  }

  @media (width>768px) {
    .containerInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      gap: 2rem;

      width: 100%;
    }
  }
`;
