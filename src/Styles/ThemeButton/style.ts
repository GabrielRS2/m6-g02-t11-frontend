import styled from "styled-components";


interface StyledButtonProps {
  color: string
  size: string
  backGroundColor: string
  borderColor: string
  choseWidth: (size: string) => string
  choseHeight: (size: string) => string
  chosePadding: (size: string) => string
  hoverColor?: string; 
  hoverbackGroundColor?: string; 
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  max-height: ${(props) => props.choseHeight(props.size)};
  width: ${(props) => props.size === "big50" ? "100%" : "auto"};
  max-width: ${(props) => props.choseWidth(props.size)};
  border-radius: 6px;
  padding: ${(props) => props.chosePadding(props.size)};
  border: 1.5px solid;

  background-color: ${(props) => props.backGroundColor};
  color: ${(props) => props.color};
  border-color: ${(props) => props.borderColor};

  font-size: 1rem;
  font-weight: 600;

  :hover {
    color: ${(props) => props.hoverColor ? props.hoverColor : props.color};
    background-color: ${(props) => props.hoverbackGroundColor ? props.hoverbackGroundColor : props.backGroundColor};
  }
`;
