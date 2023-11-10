import { Provider } from "react-redux";
import "./App.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import store from "./modules/store";

function App() {
  
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList/>
    </Provider>
  );
}

export default App;
