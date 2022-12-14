import { ThemeButton } from ".";


export const ExamplesButton = () => {

  return (
    <>
      <ThemeButton 
      backGroundColor={"var(--grey0)"}
      color={"var(--whiteFixed)"}
      size={"big"}
      borderColor={"var(--grey0)"}
      handleClick={() => {console.log("Botão grande")}}
      >Grande</ThemeButton>
      <ThemeButton 
      backGroundColor={"var(--whiteFixed)"}
      color={"var(--grey0)"}
      size={"auto"}
      borderColor={"var(--grey0)"}
      handleClick={() => {console.log("Botão auto")}}
      >Auto</ThemeButton>
      <ThemeButton 
      backGroundColor={"var(--whiteFixed)"}
      color={"var(--brand1)"}
      size={"medium"}
      borderColor={"var(--brand1)"}
      handleClick={() => {console.log("Botão médio")}}
      >Médio</ThemeButton>
    </>
  );
}
