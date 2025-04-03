import React from "react";
import {CheckboxGroup} from "@nextui-org/react";
import {CustomCheckbox} from "./CustomCheckbox";



export default function CheckBox({data=[]}) {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup
        className="gap-1"
        label="Choose Your Travel Preferences"
        orientation="horizontal"
        value={groupSelected}
        onChange={setGroupSelected}
      >
        {
          data.map(item => <CustomCheckbox key={item} value={item}>{item}</CustomCheckbox>)
        }
      </CheckboxGroup>
     {groupSelected.length>0 && <p className="mt-4 ml-1 text-default-500">
        Preferred selections: <p className="ml-16 text-default-700" >{groupSelected.join(", ")}</p>
      </p>}
    </div>
  );
}
