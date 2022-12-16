import { StyledInput } from "./style";


interface ThemeInputStandartProps {
  inputType: string;
  labelText: string;
  placeholderText: string;
}
interface ThemeInputTextAreaProps {
  labelText: string;
  placeholderText: string;
}

export const ThemeInputStandart = ({inputType, labelText, placeholderText}:ThemeInputStandartProps)=>{

  return (
  <StyledInput>
    <label>{labelText}</label>
    <input placeholder={placeholderText} type={inputType} />
  </StyledInput>
)}


export const ThemeInputTextArea = ({ labelText, placeholderText}: ThemeInputTextAreaProps)=>{
  
  return (
  <StyledInput>
    <label>{labelText}</label>
    <textarea placeholder={placeholderText} maxLength={500}/>
  </StyledInput>
  )} 

