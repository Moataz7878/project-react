import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { Component } from 'react';
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";

import NotFound from "./Not found/NotFound";
import Protfolio from "./Protfolio/Protfolio";
import Contact from "./Contacts/Contact";

let routers =createBrowserRouter([ 
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'Home',element:<Home/>},
    {path:'Portfolio',element:<Protfolio/>},
    {path:'About',element:<About/>},
    {path:'Contact',element:<Contact/>},
    {path:'*',element:<NotFound/>},
  ]}
])

export default class App extends Component {
  render() {
    return<RouterProvider router={routers} />
  }
}
