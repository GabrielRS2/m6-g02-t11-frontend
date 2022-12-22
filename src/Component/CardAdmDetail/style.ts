import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  
  padding: 2.5rem 1.75rem;
  width: 100%;
  max-width: 46.938rem;
  border-radius: 0.25rem;

  background-color: var(--grey10);

  .avatar {
    display: none;
  }

  .userName {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;

    color: var(--grey1);
  }

  .description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75rem;
    text-align: center;

    color: var(--grey2);
  }

  @media (width>768px) {
    max-width: 27.5rem;

    .avatarMobile {
      display: none;
    }
    .avatar {
      display: block;
    }
  }
`;
