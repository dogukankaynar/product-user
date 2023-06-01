import React from "react";

function Input({ name, id, value, onchange, onblur ,classname }) {
  return (
    <>
      <input className={classname} name={name} id={id} value={value} onChange={onchange} onBlur={onblur} />
    </>
  );
}

export default Input;
