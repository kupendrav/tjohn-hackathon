import React from "react";
import { Checkbox } from "../ui/checkbox";

const CheckBoxWithText = ({ children, id }: any) => {
  return (
    <div key={id} className="flex items-center space-x-2">
      <Checkbox  id={id} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
};

export default CheckBoxWithText;
