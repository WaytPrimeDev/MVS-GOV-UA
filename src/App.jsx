import { useState } from "react";
import "./App.css";

import { Start } from "./Oleg/Start";
import { Form } from "./Oleg/Form";

function App() {
  const [click, setClick] = useState(true);
  return <div>{click ? <Start start={setClick} /> : <Form />}</div>;
}

export default App;
