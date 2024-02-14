
import { Provider } from "react-redux";
import { store } from "./app/store";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
