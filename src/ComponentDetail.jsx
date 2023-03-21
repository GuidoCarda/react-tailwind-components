import React from "react";
import { useParams } from "react-router-dom";
import { Button, Dropdown } from "./App";

const ComponentDetail = () => {
  const { componentId } = useParams();

  if (componentId === "button") return <Button>example</Button>;

  return <Dropdown />;
};

export default ComponentDetail;
