import { ThemeButton } from "../../Styles/ThemeButton";
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
        <ThemeButton
          backGroundColor={"var(--grey1)"}
          color={"var(--whiteFixed)"}
          size={"medium"}
          borderColor={"var(--grey1)"}
          handleClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          ^
        </ThemeButton>
      </DivButton>
    </ContainerFooter>
  );
};
