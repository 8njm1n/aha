import React, { useEffect, useState } from 'react';
import { Check, CheckFill } from './Icon';

type TextValidationListProps = {
  rules: { message: string; pattern: RegExp }[];
  text: string;
};

function TextValidationList(props: TextValidationListProps) {
  const { rules, text } = props;
  const [validatFlags, setValidatFlags] = useState<boolean[]>([]);

  useEffect(() => {
    const result = rules.map(({ pattern }) => Boolean(pattern.test(text)));

    setValidatFlags(result);
  }, [rules, text]);
  return (
    <div
      className="py-2 rounded-xl bg-[#242424] font-ubuntu"
      style={{ boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.3)' }}
    >
      <ul>
        {rules.map(({ message }, i) => {
          const isValid = validatFlags[i];

          return (
            <li key={i} className="flex items-center text-sm max-h-[50px]">
              <div className="pl-[12px] pr-[10px]">
                {isValid ? <CheckFill /> : <Check />}
              </div>
              <span className="py-[9.5px]">{message}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TextValidationList;
