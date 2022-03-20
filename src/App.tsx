import React from "react";
import { Provider } from "react-redux";

import store from "store";
import NotesContainer from "containers/NotesContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NotesContainer />
    </Provider>
  );
};

export default App;
