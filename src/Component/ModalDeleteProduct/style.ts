import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  padding: 1.125rem 1.375rem 2.688rem 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 32.5rem;

  background-color: var(--whiteFixed);

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

    margin-bottom: 1.125rem;
  }

  .titleContainer button {
    background-color: var(--whiteFixed);
  }

  .messageDelete {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;

    color: var(--grey2);
  }

  .container_submit {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;

    width: 100%;
  }

  .button_cancel {
    background-color: var(--grey6);
    color: var(--grey2);
    width: 40%;
    height: 3rem;
    border-radius: 0.25rem;
  }

  .button_submit {
    background-color: var(--alert2);
    color: var(--alert1);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    width: 60%;
    height: 3rem;
    border-radius: 0.25rem;
  }

  @media (width>768px) {
    .button_cancel {
      padding: 0px 1.5rem;
      width: auto;
      height: 3rem;
    }
    .button_submit {
      padding: 0px 1.5rem;
      width: auto;
      height: 3rem;
    }
  } ;
`;