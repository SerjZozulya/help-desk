import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/appRouter";
import { data } from "./utils/consts/data";
import { createContext } from "react";

export const dataContext = createContext(null);

function App() {
  return (
    <dataContext.Provider value={data}>
      <RouterProvider router={router} />
    </dataContext.Provider>
  );
}

export default App;
