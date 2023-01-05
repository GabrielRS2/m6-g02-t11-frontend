import { StyledButton } from "./style";
import { choseHeight, choseWidth, chosePadding } from "./utils";

interface ThemeButtonProps {
  children: string;
  color: string;
  size: string;
  borderColor: string;
  backGroundColor: string;
  type?: string;
  hoverColor?: string; 
  hoverbackGroundColor?: string; 
  handleClick?: () => void;
}

export const ThemeButton = ({
  type,
  children,
  color,
  size,
  borderColor,
  backGroundColor,
  handleClick,
  hoverColor,
  hoverbackGroundColor,
}: ThemeButtonProps) => {
  return (
    <StyledButton
      color={color}
      size={size}
      borderColor={borderColor}
      backGroundColor={backGroundColor}
      onClick={handleClick}
      typeof={type}
      choseHeight={choseHeight}
      choseWidth={choseWidth}
      chosePadding={chosePadding}
      hoverColor={hoverColor || color}
      hoverbackGroundColor={hoverbackGroundColor || backGroundColor}
    >
      {children}
    </StyledButton>
  );
};
