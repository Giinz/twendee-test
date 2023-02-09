import {  RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.scss";
import UserList from "./components/UserList/UserList";
import RootLayout from "./Layout/RootLayout/RootLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} errorElement={<ErrorPage/>}>
      <Route index element={<HomePage/>} />
      <Route path=":page" element={<UserList/>} />
      <Route path="/404" element={<ErrorPage/>} />
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
