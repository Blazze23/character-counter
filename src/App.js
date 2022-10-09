import { useEffect, useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [footerIsVisible, setFooterIsVisible] = useState(false);

  useEffect(() => {
    if (textInput === 0 || textInput === "") {
      setFooterIsVisible(false);
    } else {
      setFooterIsVisible(true);
    }
  }, [textInput]);

  return (
    <>
      <h1>Character / Word Counter App</h1>
      <main>
        <div className="card">
          <div className="card-header">
            <h3>Start typing</h3>
          </div>
          <div className="card-body">
            <textarea
              placeholder="Type your text here"
              rows={10}
              value={textInput}
              onChange={(event) => {
                setTextInput(event.target.value);
              }}
            />
          </div>
          {footerIsVisible && (
            <div className="card-footer">
              <span>Characters: {textInput.length} </span>

              <span>Words: {textInput.trim().split(/\s+/).length} </span>
              <span>Lines: {textInput.split("\n").length} </span>
              <span>
                Symbols:{" "}
                {textInput.split(/[!@#$%^&*+()-_={}:;'"<>.,?/`]/).length - 1}
              </span>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
