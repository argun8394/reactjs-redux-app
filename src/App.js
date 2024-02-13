
import { Provider } from "react-redux";
import { store } from "./app/store";
import Layout from "./layout";



function App() {
  return (
    <div>
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
