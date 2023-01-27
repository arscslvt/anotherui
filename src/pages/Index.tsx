import React from "react";
import { Button } from "../components/Button";

export const Index = () => {
  return (
    <div className="p-4">
      <div className="flex gap-4">
        <Button>Button</Button>
        <Button variant={"outline"}>Button</Button>
        <Button variant={"transparent"}>Button</Button>
      </div>
    </div>
  );
};
