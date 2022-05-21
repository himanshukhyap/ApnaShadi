import {  RouteObject, useRoutes,  } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import NoMatch from "./NoMatch";
import PublicLayout from "./PublicLayout/PublicLayout";
import "./App.css"
import Login from "./Page/Login/Login";

function App() {
  // const count = useSelector(selectCount)
  // const dispatch = useDispatch()
  let routes: RouteObject[] =[
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "Home",
          element: <HomePage />,
        },
        {
          path: "Login",
          element: <Login />,
        }
       
      ],
    },
    { path: "*", element: <NoMatch /> },
   
  ]

  let element = useRoutes(routes);
  return (
<>
{element}

</>
  );
}

export default App;
