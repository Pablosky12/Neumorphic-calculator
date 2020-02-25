import React, { useState } from "react";
import "./styles.scss";
import { GithubPicker } from "react-color";

const InsetOnClickContext = React.createContext(false);
export default function App() {
  return (
    <div className="App">
      <h1>Neumorphism Calculator</h1>
      <Main />
    </div>
  );
}

export function Main() {
  const [isInset, setIsInset] = useState(false);
  return (
    <InsetOnClickContext.Provider value={isInset}>
      <Button
        className="button large"
        onClick={() => {
          setIsInset(!isInset);
        }}
      >
        Toggle OnClick Animation
      </Button>
      <div className="body">
        <div className="screen">1234567890</div>
        <div className="numbers">
          <Button> 1 </Button>
          <Button> 2 </Button>
          <Button> 3 </Button>
          <Button> + </Button>
          <Button> 4 </Button>
          <Button> 5 </Button>
          <Button> 6 </Button>
          <Button> - </Button>
          <Button> 7 </Button>
          <Button> 8 </Button>
          <Button> 9 </Button>
          <Button> / </Button>
          <Button> 0 </Button>
          <Button> . </Button>
          <Button> = </Button>
          <Button> * </Button>
        </div>
      </div>
    </InsetOnClickContext.Provider>
  );
}

export function Button({ children, ...props }) {
  const isInset = React.useContext(InsetOnClickContext);
  return (
    <button className={`button ${isInset ? "inset" : ""}`} {...props}>
      {children}
    </button>
  );
}
