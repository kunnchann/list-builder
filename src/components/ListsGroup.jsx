import React from "react";
import List from "./List";
const ListsGroup = ({ input, setInput, inputVal, setInputVal }) => {
  return (
    <div>
      {input.map((el) => (
        <List
          key={el.id}
          task={el.task}
          id={el.id}
          isDone={el.isDone}
          input={input}
          setInput={setInput}
          inputVal={inputVal}
          setInputVal={setInputVal}
        />
      ))}
    </div>
  );
};

export default ListsGroup;
