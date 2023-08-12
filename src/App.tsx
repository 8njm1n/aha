import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input";

function App() {
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <div className=" bg-darkModeBg pt-10 text-white flex flex-wrap min-h-screen">
        <div className="w-[335px] mx-auto">
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
