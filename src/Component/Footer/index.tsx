import {
  ContainerFooter,
  ContainerTitle,
  DivButton,
  Info,
  TitleText,
} from "./style";

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerTitle>
        <TitleText>
          <img src={"./Assets/logoWhite.svg"} alt="Motor-shop" />
        </TitleText>
      </ContainerTitle>
      <Info>
        <p>© 2022 - Todos os direitos reservados.</p>
      </Info>
      <DivButton>
        <button>^</button>
      </DivButton>
    </ContainerFooter>
  );
};
