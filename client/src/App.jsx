import { Helmet } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from './routes/Router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
