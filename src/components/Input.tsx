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
    <div className="textfield font-ubuntu">
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
      <PasswordMask length={value?.length} />
    </div>
  );
});

const PasswordMask = (props: { length?: number }) => (
  <div className="password-mask absolute top-0 left-0 right-0 bottom-0 px-3 py-5 pointer-events-none tracking-[0.15px]">
    {Array(props.length)
      .fill(true)
      .map(() => '*')}
  </div>
);

export default Input;
