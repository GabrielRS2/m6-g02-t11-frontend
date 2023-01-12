import styled from "styled-components";


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

  .container_submit {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
  }

  .button_cancel {
    background-color: var(--grey6);
    color: var(--grey2);
    width: 40%;
    height: 3rem;
    border-radius: 0.25rem;
  }

  .button_submit {
    background-color: var(--brand1);
    color: var(--whiteFixed);
    width: 60%;
    height: 3rem;
    border-radius: 0.25rem;
  }

  @media (width>768px) {
    .button_cancel {
      width: auto;
      padding: 0px 1.5rem;
    }
    
    .button_submit {
      width: auto;
      padding: 0px 1.5rem;
    }
  };
`;