import { useState } from "react";
import { Color } from "./components/colors";

function App() {
  const [change, setChange] = useState(false);
  return (
    <div className="flex">
      <Color change={change} />
      <Color change={change} />
      <Color change={change} />
      <Color change={change} />
      <Color change={change} />

      <button onClick={() => setChange((prev) => !prev)}>Button</button>
    </div>
  );
}

export default App;
