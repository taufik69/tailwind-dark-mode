import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [darkmode, setdarkmode] = useState(false);
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      console.log("true ", document.documentElement.classList);
    } else {
      document.documentElement.classList.remove("dark");
      console.log("false", document.documentElement.classList);
    }
  }, [darkmode]);
  return (
    <>
      <div className="bg-gray-200  dark:bg-black h-screen">
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={() => setdarkmode(!darkmode)}
            className="bg-gray-900 px-3 py-2 text-white rounded-xl"
          >
            change
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
