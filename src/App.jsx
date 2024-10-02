import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div>
        <h1>Fancy Counter</h1>
        <p>0</p>
        <button>Reset</button>
        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </main>
  );
}

export default App;
