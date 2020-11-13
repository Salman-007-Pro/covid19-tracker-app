//provider
import { Provider } from "./globalContextApi/globalContextApi";

//module
import MainPage from "./modules/MainPage";

//scss
import "./styles/App.scss";

function App() {
  return (
    <Provider>
      <MainPage />
    </Provider>
  );
}

export default App;
