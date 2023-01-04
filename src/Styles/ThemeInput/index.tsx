import { FieldError } from "react-hook-form/dist/types";
import { StyledInput } from "./style";


interface ThemeInputStandartProps {
  inputType: string;
  labelText: string;
  placeholderText: string;
  choseWidth: string;
  fieldContext?: any;

}
interface ThemeInputTextAreaProps {
  labelText: string;
  placeholderText: string;
  choseWidth: string;
  fieldContext?: any;
}


export const ThemeInputStandart = ({
  inputType,
  labelText,
  placeholderText,
  choseWidth,
  fieldContext,
}: ThemeInputStandartProps) => {
  return (
    <StyledInput choseWidth={choseWidth}>
      <label>{labelText}</label>
      <input placeholder={placeholderText} type={inputType} {...fieldContext} />
    </StyledInput>
  );
};

export const ThemeInputTextArea = ({
  labelText,
  placeholderText,
  choseWidth,
  fieldContext,
}: ThemeInputTextAreaProps) => {
  return (
    <StyledInput choseWidth={choseWidth}>
      <label>{labelText}</label>
      <textarea
        placeholder={placeholderText}
        maxLength={500}
        {...fieldContext}
      />
    </StyledInput>
  );
};
