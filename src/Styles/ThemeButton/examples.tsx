import { ThemeButton } from ".";


export const ExamplesButton = () => {

  return (
    <>
      <ThemeButton 
      backGroundColor={"grey0"}
      color={"whiteFixed"}
      size={"big"}
      borderColor={"grey0"}
      handleClick={() => {console.log("Botão grande")}}
      >Grande</ThemeButton>
      <ThemeButton 
      backGroundColor={"whiteFixed"}
      color={"grey0"}
      size={"auto"}
      borderColor={"grey0"}
      handleClick={() => {console.log("Botão auto")}}
      >Auto</ThemeButton>
      <ThemeButton 
      backGroundColor={"whiteFixed"}
      color={"brand1"}
      size={"medium"}
      borderColor={"brand1"}
      handleClick={() => {console.log("Botão médio")}}
      >Médio</ThemeButton>
    </>
  );
}
