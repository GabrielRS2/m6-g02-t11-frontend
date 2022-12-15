import styled from "styled-components";


interface StyledButtonProps {
  color: string
  size: string
  backGroundColor: string
  borderColor: string
  choseWidth: (size: string) => string
  choseHeight: (size: string) => string
  chosePadding: (size: string) => string
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  max-height: ${(props) => props.choseHeight(props.size)};
  width: 100%;
  max-width: ${(props) => props.choseWidth(props.size)};
  border-radius: 6px;
  padding: ${(props) => props.chosePadding(props.size)};
  border: 1.5px solid;

  background-color: ${(props) => props.backGroundColor};
  color: ${(props) => props.color};
  border-color: ${(props) => props.borderColor};
`;
