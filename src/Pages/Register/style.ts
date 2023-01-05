import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 8.25rem 1rem 4.438rem 1rem;

  background-color: var(--grey8);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  width: 100%;
  max-width: 21.438rem;
  padding: 2.75rem 1.75rem;
  border-radius: 0.25rem;

  background-color: var(--grey10);
  
  .title {
    font-family: 'Lexend';
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;

    color: var(--grey0);
  }

  @media (width>768px) {
    max-width: 25.75rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .subTitle {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey0);
  }

  .inputsContainer {
    display: flex;
    gap: 0.75rem;
  }

  .sellerButton {
    width: 47%;
    padding: 0.75rem 1.75rem;
    background-color: var(--whiteFixed);
    border: solid var(--grey4) 0.1rem;
    border-radius: 0.25rem;
    transition: 0.5s;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 1rem;
  }

  .button_focused {
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border: solid var(--brand1) 0.1rem;
  }
`;