import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";

// Import Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Page Layout
const Layout = () => {
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/post",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;