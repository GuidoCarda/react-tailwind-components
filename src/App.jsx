import { useState } from "react";
import "./App.css";

//Routing
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./Home";
import ComponentDetail from "./ComponentDetail";

//Icons
import { EllipsisVerticalIcon, TrashIcon } from "@heroicons/react/24/outline";

//Tailwind classes util
import clsx from "clsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/:componentId" element={<ComponentDetail />} />
      </Route>
    </Routes>
  );
}

export default App;

export const Button = ({ children, ...props }) => {
  return (
    <button className="h-10 bg-white rounded-md w-32" {...props}>
      {children}
    </button>
  );
};

const defaultOptions = ["edit", "delete", "config", "view"];

export const Dropdown = ({ options = defaultOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="h-10 w-10 bg-white rounded-md grid place-content-center focus:outline-indigo-400/40 focus:border-none"
      >
        <EllipsisVerticalIcon className="h-8 w-8 text-neutral-800" />
      </button>
      {isOpen && (
        <div className="absolute top-12 right-0 w-40 p-2 bg-white rounded-md flex flex-col gap-2">
          {options.map((op) => (
            <button
              onClick={toggle}
              className={clsx(
                "h-10 rounded-md px-2 text-left capitalize flex gap-2 items-center",
                "hover:bg-neutral-100 focus:outline-indigo-300",
                "active:bg-indigo-400 active:text-white"
              )}
            >
              <TrashIcon className="h-5 w-5" />
              {op}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
