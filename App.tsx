// @ts-ignore
import React, {useEffect} from 'react';
// @ts-ignore
import type {Node} from 'react';
import {Provider} from "react-redux";
import {store} from "./src/Store/store";

import Main from "./main";
const App: () => Node = () => {



  return (
      <Provider store={store}>
            <Main />
      </Provider>
  );
};


export default App;
