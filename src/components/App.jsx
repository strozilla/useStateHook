import React, { useState } from "react";

function App() {
  const [count, newCount] = useState(() => {
    return 0;
  });

  function increase() {
    newCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
