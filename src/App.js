
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Register from "./Register/Register";
import Login from "./Login/Login";

const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element: <Register></Register>
    },
    {
      path:'/register',
      element: <Register></Register>
    },
    {
      path:'/login',
      element: <Login></Login>
    },
  ]
}
])
function App() {
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>

      {/* <form onSubmit={handleRegister}>
            <input onChange={handleEmailChange} type="email" name="email" id="" placeholder='your Email' />
            <br />
            <input onChange={passwordChange} type="password" name="password" id="" placeholder='your password' />
            <br />
            <button type="submit">Register</button>
          </form> */}
    </div>
  );
}

export default App;
