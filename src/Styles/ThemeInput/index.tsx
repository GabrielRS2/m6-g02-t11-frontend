import { StyledInput } from "./style";

interface ThemeInputStandartProps {
  inputType: string;
  labelText: string;
  placeholderText: string;
  choseWidth: string;
}
interface ThemeInputTextAreaProps {
  labelText: string;
  placeholderText: string;
  choseWidth: string;
}

export const ThemeInputStandart = ({
  inputType,
  labelText,
  placeholderText,
  choseWidth,
}: ThemeInputStandartProps) => {
  return (
    <StyledInput choseWidth={choseWidth}>
      <label>{labelText}</label>
      <input placeholder={placeholderText} type={inputType} />
    </StyledInput>
  );
};

export const ThemeInputTextArea = ({
  labelText,
  placeholderText,
  choseWidth,
}: ThemeInputTextAreaProps) => {
  return (
    <StyledInput choseWidth={choseWidth}>
      <label>{labelText}</label>
      <textarea placeholder={placeholderText} maxLength={500} />
    </StyledInput>
  );
};
