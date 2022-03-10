import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4 * 1000);
  }, []);

  return loading ? (
    <div className="App">
      <h1>Загрузка</h1>
    </div>
  ) : (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
