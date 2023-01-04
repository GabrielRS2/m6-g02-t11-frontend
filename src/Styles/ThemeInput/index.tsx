import { FieldError } from "react-hook-form/dist/types";
import { StyledInput } from "./style";


interface ThemeInputStandartProps{
  inputType: string;
  labelText: string;
  placeholderText: string;
  error?: FieldError;
  className?: string;
}
interface ThemeInputTextAreaProps {
  labelText: string;
  placeholderText: string;
}

export const ThemeInputStandart = ({inputType, labelText, placeholderText, error, className, ...rest}:ThemeInputStandartProps)=>{

  return (
  <StyledInput className={className}>
    <label>{labelText} {error && <span>{error.message}</span>}</label>
    <input placeholder={placeholderText} type={inputType} {...rest}/>
  </StyledInput>
)}


export const ThemeInputTextArea = ({ labelText, placeholderText}: ThemeInputTextAreaProps)=>{
  
  return (
  <StyledInput>
    <label>{labelText}</label>
    <textarea placeholder={placeholderText} maxLength={500}/>
  </StyledInput>
  )} 

