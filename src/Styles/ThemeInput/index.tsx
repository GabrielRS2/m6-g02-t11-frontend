import { StyledInput } from "./style";

interface ThemeInputStandartProps {
  inputType: string;
  labelText: string;
  placeholderText: string;
  choseWidth: string;
  fieldContext?: any;
  error?: string;
  isErrorUnder?: boolean;
  inputClass?: string;
  value?: string | number;
  onChange?: any;
  onBlur?: any;
  inputValue?: any;
  extra?: boolean;
}
interface ThemeInputTextAreaProps {
  labelText: string;
  placeholderText: string;
  choseWidth: string;
  fieldContext?: any;
  error?: string;
  value?: string | number;
}

export const ThemeInputStandart = ({
  inputType,
  labelText,
  placeholderText,
  choseWidth,
  fieldContext,
  error,
  isErrorUnder = false,
  inputClass,
  value,
  onChange,
  inputValue,
  onBlur,
  extra,
}: ThemeInputStandartProps) => {
  return (
    <StyledInput choseWidth={choseWidth} className={inputClass}>
      <label>
        {labelText}
        {!isErrorUnder && error !== "undefined" && (
          <span className="error"> - {error}</span>
        )}
      </label>
      {extra ? (
        <input
          placeholder={placeholderText}
          type={inputType}
          {...fieldContext}
          value={inputValue}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={value}
        />
      ) : (
        <input
          placeholder={placeholderText}
          type={inputType}
          {...fieldContext}
          defaultValue={value}
        />
      )}
      {isErrorUnder && error !== "undefined" && (
        <span className="error">{error}</span>
      )}
    </StyledInput>
  );
};

export const ThemeInputTextArea = ({
  labelText,
  placeholderText,
  choseWidth,
  fieldContext,
  error,
  value,
}: ThemeInputTextAreaProps) => {
  return (
    <StyledInput choseWidth={choseWidth}>
      <label>
        {labelText}
        {error !== "undefined" && <span className="error"> - {error}</span>}
      </label>
      <textarea
        placeholder={placeholderText}
        maxLength={500}
        {...fieldContext}
        defaultValue={value}
      />
    </StyledInput>
  );
};
