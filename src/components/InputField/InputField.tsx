import cn from 'classnames';
import { useField } from 'formik';
import './InputField.scss';
import { MdError } from 'react-icons/md';
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const InputField = ({ label, ...inputProps }: InputFieldProps) => {
  const [field, meta] = useField(inputProps.name);
  const hasError = meta.touched && meta.error;

  const inputId = inputProps.id || inputProps.name;

  return (
    <div className="input-field">
      <label htmlFor={inputId} className="input-field__label">
        {label}
      </label>
      <input
        id={inputId}
        {...field}
        {...inputProps}
        className={cn('input-field__input', {
          'input-field__input--error': hasError,
        })}
        aria-invalid={hasError ? 'true' : 'false'}
        aria-describedby={hasError ? `${inputId}-error` : undefined}
      />
      {hasError && (
        <div
          id={`${inputId}-error`}
          className="input-field__error-message"
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
        >
          <MdError className="input-field__error-icon" />
          {meta.error}
        </div>
      )}
    </div>
  );
};
