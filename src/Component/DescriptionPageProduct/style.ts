import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  
  padding: 2.25rem 1.75rem;
  width: 100%;
  max-width: 46.938rem;
  border-radius: 0.25rem;

  background-color: var(--grey10);

  .descriptionTittle {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.51rem;

    color: var(--grey1);
  }

  .description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75rem;

    color: var(--grey2);
  }

  @media (width>768px) {
    .avatarMobile {
      display: none;
    }
    .avatar {
      display: block;
    }
  }
`;
