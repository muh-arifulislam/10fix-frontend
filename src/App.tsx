import { ScrollRestoration } from "react-router-dom";
import Main from "./layout/Main";

function App() {
  return (
    <>
      <Main />
      <ScrollRestoration />
    </>
  );
}

export default App;
