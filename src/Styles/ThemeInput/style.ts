import styled from "styled-components";

interface StyledInputProps {
  choseWidth: string;
}

export const StyledInput = styled.div<StyledInputProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.choseWidth};
  gap: 8px;
  box-sizing: border-box;

  label {
    font-size: 14px;
    font-weight: 500;
    color: var(--grey1);
  }

  input {
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    padding: 16px 24px;

    border: 1.5px solid var(--grey7);
    border-radius: 5px;

    background-color: var(--grey9);
    transition: 0.5s;
  }
  input::placeholder {
    color: var(--grey3);
  }
  input:hover {
    background-color: var(--grey7);
    border-color: var(--grey7);
  }
  input:focus {
    border-color: var(--brand2);
    background-color: var(--grey9);
  }

  textarea {
    width: 100%;
    height: 150px;
    resize: none;
    padding: 16px 24px;

    font-size: 16px;
    font-weight: 400;

    border: 1.5px solid var(--grey7);
    border-radius: 5px;

    background-color: var(--grey9);
  }
  textarea {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  textarea::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  textarea::placeholder {
    color: var(--grey3);
  }
  textarea:hover {
    background-color: var(--grey8);
    border-color: var(--grey8);
  }
  textarea:focus {
    border-color: var(--brand2);
    background-color: var(--grey9);
  }
`;
