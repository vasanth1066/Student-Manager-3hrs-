import React from "react";

const Context = React.createContext({
  data: [],
  adddata: (data) => {},
  updatedata: (data) => {},
});

export default Context;
