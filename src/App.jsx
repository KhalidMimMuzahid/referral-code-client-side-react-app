import { RouterProvider } from "react-router-dom";
import router from "./Router/router";

const App = () => {
  return (
    <div className='main_app_container'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
