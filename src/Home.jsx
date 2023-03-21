import React from "react";
import { Outlet } from "react-router-dom";
import { Dropdown } from "./App";
import Sidebar from "./components/Sidebar";

const Home = () => {
  return (
    <div className="bg-indigo-400 h-screen flex">
      <Sidebar></Sidebar>
      <main className="border-2 flex-1 flex items-center justify-center">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Home;
