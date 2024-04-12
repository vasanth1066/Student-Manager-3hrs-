import React, { useState } from "react";

import Context from "./Context";

const ContextProvider = (props) => {
  const [data, setData] = useState("");

  const Adddatahandler = (datas) => {
    setData([...data, { ...datas, count: 1 }]);
  };

  const UpdateHandler = () => {};

  const context = {
    data: data,
    adddata: Adddatahandler,
    updatedata: UpdateHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default ContextProvider;
