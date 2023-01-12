import { StyledInput } from "./style";
import { InputHTMLAttributes } from "react";

interface ThemeInputStandartProps
  extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  fieldContext: any;
  choseWidth: string;
  error: any;
  isErrorUnder?: boolean;
  classe?: string;
}

export const InputMask = ({
  labelText,
  choseWidth,
  fieldContext,
  error,
  isErrorUnder = false,
  classe,
  ...rest
}: ThemeInputStandartProps) => {
  return (
    <StyledInput choseWidth={choseWidth} className={classe}>
      <label>
        {labelText}
        {!isErrorUnder && error !== "undefined" && (
          <span className="error"> - {error}</span>
        )}
      </label>

      <input {...fieldContext} {...rest} />
      {isErrorUnder && error !== "undefined" && (
        <span className="error">{error}</span>
      )}
    </StyledInput>
  );
};
