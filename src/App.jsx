import Login from "./pages/login/Login2";
import Register from "./pages/register/Register2";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/NavBar2";
import LeftBar from "./components/leftbar/LeftBar2";
import RightBar from "./components/rightbar/RightBar2";
import Home from "./pages/home/Home2";
import Profile from "./pages/profile/Profile2";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
 
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);
   console.log("Current user:", currentUser);
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };
  const ProtectedRoute = ({ children }) => children;


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // Login and register removed for dev mode

  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;