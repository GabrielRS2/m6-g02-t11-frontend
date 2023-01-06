import styled from "styled-components";

export const ModalContainer = styled.form`
  position: absolute;
  top: 5%;
  margin: auto;
  left: 50%;
  z-index: 11;
  transform: translate(-50%);

  display: flex;
  justify-content: center;

  flex-direction: column;
  background-color: #ffffff;

  gap: 1rem;

  width: 100%;
  max-width: 24rem;
  padding: 1.125rem 1.5rem;
  border-radius: 1rem;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
    flex-wrap: wrap;
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

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }
  span {
    font-size: 0.875rem;
    font-weight: 500;
  }
  svg {
    color: var(--grey4);
    cursor: pointer;
  }
  button {
    width: 47%;
    padding: 0.75rem 1.75rem;
    background-color: var(--whiteFixed);
    border: solid var(--grey4) 0.1rem;
    border-radius: 0.25rem;
    transition: 0.5s;
  }

  .button_focused {
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border: solid var(--brand1) 0.1rem;
  }
  .button_base {
    background-color: var(--whiteFixed);
    border: solid var(--grey4) 0.1rem;
  }
  .button_add_field {
    background-color: var(--brand4);
    color: var(--brand1);
    width: 70%;
    min-width: 300px;
    padding: 0.75rem 0.75rem;
    margin-bottom: 1rem;
  }
  .button_cancel {
    background-color: var(--grey6);
    color: var(--grey2);
    width: 50%;
  }
  .button_submit {
    background-color: var(--brand4);
    color: var(--brand1);
    width: 50%;
    padding: 0.75rem 1rem;
  }

  @media (width>768px) {
    max-width: 33rem;

    .container {
      width: 100%;
      flex-wrap: nowrap;
    }

    .button_cancel {
      width: 60%;
    }
    .button_submit {
      width: 40%;
    }
  } ;
`;
