import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import Pagenotfound from './components/Pagenotfound';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const router =createBrowserRouter([
  {path:"",element:<Home/>},
  {path:"home",element:<Home/>},
  {path:"about",element:<About/>},
  {path:"portfolio",element:<Portfolio/>},
  {path:"contact",element:<Contact/>},
  {path:"*",element:<Pagenotfound/>}

])

function App() {
  
  
  return (
    <>
      <Navbar />
      <RouterProvider router={router}/>
      <Foot />
    </>
  );
}

export default App;
