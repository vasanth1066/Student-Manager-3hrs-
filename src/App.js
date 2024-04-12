import React from "react";
import Studentdetails from "./Components/Studentdetails";
import ContextProvider from "./Store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Studentdetails />
    </ContextProvider>
  );
}

export default App;
