import { CommandLineIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const sidebarLinks = [
  { to: "/button", label: "button" },
  { to: "/dropdown", label: "dropdown" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-white p-4">
      <div className="flex items-center gap-2 text-zinc-600 mt-4 mb-10">
        <CommandLineIcon className="h-10 w-10" />
        <span className="text-2xl font-semibold ">DoguiUI</span>
      </div>

      <div className="">
        <span className="text-zinc-400 font-semibold">Components</span>
        <ul className="flex flex-col gap-4 p-4">
          {sidebarLinks.map((link) => (
            <li>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
