import styled from "styled-components";

export const ContainerProfileUser = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 2000px;
  background: var(--grey6);
  overflow: hidden;

  z-index: 0;
  @media (min-width: 430px) {
    height: 1928px;
  }
`;
export const ContainerHeader = styled.div`
  background: var(--brand1);
  width: 100vw;
  height: 331px;
  z-index: 0;
  @media (min-width: 430px) {
    height: 357px;
    overflow: hidden;
  }
`;
export const ContainerUserCard = styled.div`
  background: var(--grey10);
  width: 343px;
  height: 397px;
  z-index: 0;

  position: absolute;
  top: 145px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 430px) {
    width: 77.5%;
    height: 327px;
    min-width: 343px;
    max-width: 1240px;

    top: 155px;
  }
`;
export const ContainerMain = styled.div`
  z-index: 0;
`;
export const ContainerFooter = styled.div`
  background: var(--grey0);
  width: 100vw;
  height: 310.34px;
  position: absolute;
  bottom: 0;
  z-index: 0;
  @media (min-width: 430px) {
    height: 140px;
  }
`;
