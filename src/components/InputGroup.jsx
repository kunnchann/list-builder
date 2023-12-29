import React from "react";
const InputGroup = ({ setInput, input, inputVal, setInputVal }) => {
  const submitForm = (event) => {
    event.preventDefault();
    const newList = {
      id: Math.random(),
      task: inputVal,
      isDone: false,
    };
    setInput([...input, newList]);
    setInputVal("");
  };

  return (
    <div className="mb-4">
      <form onSubmit={submitForm} className=" flex items-center">
        <input
          type="text"
          value={inputVal}
          onChange={(event) => {
            setInputVal(event.target.value);
          }}
          required
          className="text-[24px] font-[600] outline-none px-3 rounded-none self-stretch w-[400px] border-[3px] border-black"
        />

        <svg
          type="submit"
          onClick={submitForm}
          className={`bg-[#121212] ${
            !inputVal && "pointer-events-none"
          }   w-[50px] p-2 hover:cursor-pointer`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </form>
    </div>
  );
};

export default InputGroup;
