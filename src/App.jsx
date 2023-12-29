import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import ListsGroup from "./components/ListsGroup";
import NoList from "./components/NoList";
import ShowCaseGroup from "./components/ShowCaseGroup";

const App = () => {
  const [input, setInput] = useState([]);
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="w-screen bg-black h-screen flex justify-center items-center">
      <div className="custom-scroll-bar relative p-[30px] max-h-[500px] overflow-x-hidden overflow-y-scroll bg-white  border rounded-md">
        <div className="mb-4 sticky top-[-30px] w-full h-full bg-white z-10  bottom-0">
          <Header />
          <InputGroup
            setInput={setInput}
            input={input}
            inputVal={inputVal}
            setInputVal={setInputVal}
          />
          <ShowCaseGroup input={input} />
        </div>
        {!input.length && <NoList />}
        <ListsGroup
          input={input}
          setInput={setInput}
          inputVal={inputVal}
          setInputVal={setInputVal}
        />
      </div>
    </div>
  );
};

export default App;
