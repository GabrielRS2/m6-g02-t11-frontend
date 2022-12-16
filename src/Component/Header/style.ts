import styled from "styled-components";

interface PopupContainerProps {
  isOpen: boolean
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  width: 100%;
  max-width: 100vw;
  height: 5rem;
  padding: 0px 1rem;

  background-color: var(--grey10);

  border-bottom: 2px solid var(--grey6);

  ul {
    display: none;
  }

  .infoContainer {
    display: none;
  }

  @media (width>768px) {
    padding: 0px 3.75rem;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      padding: 0px 44px;
      width: 20.188rem;
      height: 100%;
  
      font-weight: 600;
      font-size: 1rem;
      color: var(--grey2);
  
      border-right: 1px solid var(--grey4);
    }

    .infoContainer {
      display: flex;

      height: 100%;
    }
      
    .infoContainer ul li button {
      font-weight: 600;
      color: var(--grey2);

      background-color: var(--grey10);
    }

    .infoContainer .infoLoginContainer {
      display: flex;
      align-items: center;
      
      padding-left: 2.75rem;
      height: 100%;
    }

    .loginButton {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-weight: 400;
      color: var(--grey2);

      background-color: var(--grey10);
    }

    .infoContainer .infoLogoutContainer {
      display: flex;
      align-items: center;
      gap: 2.5rem;

      padding-left: 2.75rem;
      height: 100%;
    }

    .infoContainer .infoLogoutContainer .goLoginButton {
      font-weight: 600;
      color: var(--grey2);

      background-color: var(--grey10);
    }
  }

`;

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 1rem;
  
  font-size: 1rem;
  background-color: var(--grey10);
  
  @media (width>768px) {
    display: none;
  }
`;

export const PopupContainer = styled.div<PopupContainerProps>`
  display: flex;
  flex-direction: column;
  
  position: absolute;
  z-index: 1;
  overflow: hidden;
  top: ${(props) => props.isOpen ? "5rem" : "-50%"};
  
  width: 100%;
  max-width: 100vw;
  height: auto;
  
  background-color: var(--whiteFixed);

  transition: top 0.6s;
  
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    
    height: 14.75rem;
    padding: 32px 16px 32px 16px;
    
    font-weight: 600;
    color: var(--grey2);

    border-bottom: 1px solid var(--grey4);
  }

  .infoLogoutContainerMobile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    height: 11.5rem;
    padding: 32px 16px 32px 16px;
    width: 100%;

    font-weight: 600;
    color: var(--grey2);

    border-bottom: 1px solid var(--grey4);
  }

  .infoLoginContainerMobile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    width: 100%;
    height: 5rem;
    padding: 32px 16px 32px 16px;

    border-bottom: 1px solid var(--grey4);
  }

  .infoLoginContainerMobile p{
    font-weight: 400;
    font-size: 16px;

    color: var(--grey2);
  }

  .loginButton {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-weight: 400;
    color: var(--grey2);

    background-color: var(--grey10);
  }

  @media (width>768px) {
    display: none;
  }
`;
