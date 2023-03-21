import clsx from "clsx";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-indigo-400 h-screen grid place-items-center">
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const options = ["elem 1", "elem 2", "elem 3", "elem 3"];

  return (
    <div className="relative">
      <button onClick={toggle} className="h-10 w-10 bg-white rounded-md">
        x
      </button>
      {isOpen && (
        <div className="absolute top-12 right-0 w-40 p-2 bg-white rounded-md flex flex-col gap-2">
          {options.map((op) => (
            <button
              onClick={toggle}
              className="rounded-md h-10 text-left px-2 hover:bg-neutral-100 focus:outline-purple-300"
            >
              {op}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
