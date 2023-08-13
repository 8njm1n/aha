import { forwardRef, MouseEventHandler } from 'react';

type InputProps = {
  editable?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  type?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    editable = false,
    value,
    onChange,
    label,
    placeholder,
    onClick,
    type = 'text',
  } = props;

  return (
    <div className="textfield">
      {label && <label>{label}</label>}
      <input
        onClick={onClick}
        ref={ref}
        readOnly={editable}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
});

export default Input;
