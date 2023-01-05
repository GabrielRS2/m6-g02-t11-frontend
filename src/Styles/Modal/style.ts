import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  margin: auto;
  left: 50%;
  transform: translate(-50%);

  z-index: 10;

  width: 100%;
  max-width: 100vw;
  height: 100%;

  padding: 5.875rem 0.875rem;

  background-color: var(--grey0);
  opacity: 50%;
`;