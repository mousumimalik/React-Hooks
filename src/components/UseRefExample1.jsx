import React, { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "gray";
    paraRef.current.innerText = "Hello Paragraph!";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={ paraRef }>Paragraph!</p>
      </form>
    </div>
  );
}

export default UseRefExample1;
