import styled from "styled-components";

export const FormContainer = styled.div`
  position: absolute;
  top: 5%;
  margin: auto;
  left: 50%;
  z-index: 11;
  transform: translate(-50%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  width: 100%;
  max-width: 32.5rem;
  padding: 1.125rem 1.5rem 2.063rem 1.5rem;
  border-radius: 0.25rem;

  background-color: var(--grey10);
  
  .title {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;

    color: var(--grey1);
  }

  .titleContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.5rem;
  }
  .titleContainer button {
    background-color: var(--whiteFixed);
  }

  @media (width>768px) {
    max-width: 32.5rem;
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
  } ;
`;