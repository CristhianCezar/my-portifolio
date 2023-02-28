import React from "react";
import Home from "./routes/home/Home";
import Header from "./components/header/Header";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from "./error/ErrorPage";
import AboutMe from './routes/about/AboutMe';
import Client from './routes/client/Client';
import Contact from './routes/contact/Contact';
import Skill from './routes/skill/Skill';
import Service from './routes/service/Service';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />,
    },
    {
      path:"aboutMe",
      element: <AboutMe />
    },
    {
      path:"contact",
      element: <Contact />
    },
    {
      path:"client",
      element: <Client />
    },
    {
      path:"skill",
      element: <Skill />
    },
    {
      path:"service",
      element: <Service />
    },
    
  ]);

  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
