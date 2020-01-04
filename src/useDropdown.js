import React, { useState } from "react";

const useDropdown = (xlabel, xdefaultState, xoptions) => {
  const [state, setState] = useState(xdefaultState);
  const id = `use-dropdown-${xlabel.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {xlabel}
        <select
          id={id}
          value={state}
          onChange={e => setState(e.target.value)}
          disabled={xoptions.length === 0}
        >
          <option>All</option>
          {xoptions.map(items => (
            <option key={items} value={items}>
              {items}
            </option>
          ))}
          {/* Here we can't use {} in because we want to return jsx so that */}
        </select>
      </label>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;
