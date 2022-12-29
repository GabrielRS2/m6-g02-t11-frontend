import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  padding: 2.5rem 1.813rem;
  width: 100%;
  max-width: 77.5rem;
  
  background-color: var(--grey10);

  .nameContainerAdmPage h3 {
    font-weight: 600px;
    font-size: 1.25rem;

    margin: 0.5rem 0;

    color: var(--grey1);
  }

  .nameContainerAdmPage h3 span {
    padding: 4px 8px;

    font-weight: 500;
    font-size: 0.875rem;

    color: var(--brand1);
    background-color: var(--brand4);
  }

  p{
    font-weight: 400;
    font-size: 1rem;

    color: (--grey2);
  }

  .descriptionPerfilAdm {
    text-overflow: ellipsis;
  }
`;
