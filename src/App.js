import {useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
//import logo from './logo.svg';

import Home from './pages/Home'
import NotFound from './pages/NotFound';
import WebDesign from './pages/WebDesign';

import './styles/W3Style.css';
import './styles/mystyle.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement: <NotFound />
  },
  {
    path:'/web-design',
    element:<WebDesign />
  },
])

function App() {
  return (
    <div className="home">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
