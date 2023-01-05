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

  a {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--grey2);
  }

  .registerLink {
    display: flex;
    justify-content: center;

    width: 100%;
  }

  @media (width>768px) {
    max-width: 25.75rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 0.5rem;

  .loginLink {
    display: flex;
    justify-content: flex-end;

    padding-right: 1.5rem;
    width: 100%;
    margin-top: 0.563rem;
    margin-bottom: 1.313rem;
  }
`;