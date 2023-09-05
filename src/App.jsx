import "./styles/main.scss";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store from "./redux/store/store";

//35:16 https://www.youtube.com/watch?v=TuOF8ppiKDY
function App() {

  return (
    <div className="App">
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App
