import { useState } from 'react';
import CustomDatePicker from 'components/CustomDatePicker';
import Input from 'components/Input';
import TextValidationList from 'components/TextValidationList';
import { PASSWORD_RULES } from 'constant';

function Home() {
  const [password, setPassword] = useState('');

  return (
    <div id="home" className="pt-10 text-white flex flex-wrap">
      <div className="w-[335px] mx-auto">
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <div className="mt-5">
          <TextValidationList text={password} rules={PASSWORD_RULES} />
        </div>
      </div>
      <div className="w-[335px] mx-auto">
        <CustomDatePicker label="Birthday" />
      </div>
    </div>
  );
}

export default Home;
